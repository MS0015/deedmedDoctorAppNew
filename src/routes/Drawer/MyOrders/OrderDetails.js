import { Divider, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { SafeAreaView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../comp/Header';
import PharmaciesCard from '../../../comp/PharmaciesCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OrderCard from '../../../comp/OrderCard';
export default function OrderDetails() {
  return (
    <SafeAreaView>
      <Header title={'Order Details'} />
      <VStack bg={'white'} m={3} pb={5} py={2} borderRadius={10}>
        <OrderCard noMoreInfo noShadow />
        <Divider />
        <HStack justifyContent={'space-evenly'} mt={5}>
          <VStack alignItems={'center'}>
            <LinearGradient
              style={{
                padding: 10,
                borderRadius: 50,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#0452E5', '#01B7EB']}
            >
              <AntDesign name="checkcircleo" size={40} color={'white'} />
            </LinearGradient>
            <Text variant={'title'}>Accepted</Text>
          </VStack>
          <VStack alignItems={'center'}>
            <LinearGradient
              style={{
                padding: 10,
                borderRadius: 50,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#0452E5', '#01B7EB']}
            >
              <AntDesign name="checkcircleo" size={40} color={'white'} />
            </LinearGradient>
            <Text variant={'title'}>Shipping</Text>
          </VStack>
          <VStack alignItems={'center'}>
            <LinearGradient
              style={{
                padding: 10,
                borderRadius: 50,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#0452E5', '#01B7EB']}
            >
              <AntDesign name="checkcircleo" size={40} color={'white'} />
            </LinearGradient>
            <Text variant={'title'}>Delivered</Text>
          </VStack>
        </HStack>

        <VStack mt={10} alignSelf={'center'} bg={'red.100'} w={200} h={300} />
      </VStack>
    </SafeAreaView>
  );
}
