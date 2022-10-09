import React from 'react';
import { HStack, ScrollView, Text, VStack } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ms, vs } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import UserMainHeader from '../comp/UserMainHeader';
import CategoryCard from '../comp/CategoryCard';
import DoctorCard from '../comp/DoctorCard';
import NotificationCard from '../comp/NotificationCard';
import { useGetUserQuery } from '../reducer/api/userApi';
import {
  doctorApi,
  useGetAllCategoryQuery,
  useGetFeatureDoctorQuery,
} from '../reducer/api/doctorApi';
import LoadingCategory from '../comp/LoadingCategory';

export default function Feature({ navigation }) {
  const { isFetching: userIsFetching } = useGetUserQuery();
  const { data: categoryData, isFetching: categoryIsFetching } = useGetAllCategoryQuery();
  const { data: featureDoctorData, isFetching: featureDoctorIsFetching } =
    useGetFeatureDoctorQuery();

  const name = useSelector((state) => state.userState?.userDetails?.name);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserMainHeader userName={name} isFetching={userIsFetching} />
      <ScrollView bg="gray.100">
        <VStack m={2} mt={0} space={2}>
          <Text variant="bold" fontSize={ms(18)}>
            Categories
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {!categoryIsFetching &&
              categoryData?.data.map((cat) => (
                <CategoryCard
                  label={cat.name}
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/patientapp-3debf.appspot.com/o/patientApp%2Fhearr.png?alt=media&token=58ca73e1-1fe6-4b7f-80c2-aca3f593ed55"
                />
              ))}
            {categoryIsFetching && (
              <>
                <LoadingCategory />
                <LoadingCategory />
                <LoadingCategory />
                <LoadingCategory />
                <LoadingCategory />
                <LoadingCategory />
              </>
            )}
          </ScrollView>

          <NotificationCard
            type="prescriptionReceived"
            onPress={() => navigation.navigate('PrescriptionReceived')}
          />
          <NotificationCard
            type="ratePharmacy"
            onPress={() => navigation.navigate('RatePharmacy')}
          />
        </VStack>

        <VStack m={2} space={3}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text variant="bold" fontSize={ms(18)}>
              Feature Doctor
            </Text>
            <HStack alignItems="center">
              <Text variant="light" color="#677294">
                See all
              </Text>
              <MaterialIcons name="chevron-right" color="#677294" size={vs(13)} />
            </HStack>
          </HStack>
          {featureDoctorData?.data.map((doc) => (
            <DoctorCard
              name={doc.name}
              experienceYears={doc.experienceYears}
              isFavourite={doc.isFavourite}
              // onClickFavourite={() => doctorApi.endpoints.addFavDoc.useQuery('jjj')}
              onPress={() => navigation.navigate('FillThisDetails')}
            />
          ))}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
