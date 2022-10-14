import { Button, Divider, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { ImageBackground, SafeAreaView, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../comp/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import GButton from '../../comp/GButton';

export default function DoctorSuggestTime() {
  return (
    <SafeAreaView>
      <Header title={'Doctor Suggest Time'} />

      <VStack m={4} p={4} bg="white" borderRadius={10} shadow={2}>
        <HStack space={3}>
          <VStack>
            <ImageBackground
              style={{
                width: 85,
                height: 85,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}
              imageStyle={{ borderRadius: 10 }}
              source={require('../../asset/img/dr.jpg')}
              resizeMode="cover"
            >
              <HStack alignItems="center" space={1} bg="gray.100">
                <MaterialIcons name="star" color="orange" size={15} />
                <Text variant="mainTitle" fontSize="sm">
                  3.7
                </Text>
              </HStack>
            </ImageBackground>
          </VStack>
          <VStack flex={1}>
            <Text variant="mainTitle">Fever consultation</Text>
            <Text variant="mainTitle" mb={-1}>
              Dr. Saravanan
            </Text>
            <Text variant="desc" color="blue.600" fontSize="xs">
              Specilist medicine
            </Text>
            <Text variant="desc" fontSize="xs" color="gray.600">
              Online | Report Reading
            </Text>
          </VStack>
        </HStack>
        <Divider my={2} />
        <VStack alignItems={'center'} space={3}>
          <Text variant={'mainTitle'} color={'blue.600'} fontSize={'lg'}>
            2022-10-21 at 2:00 PM
          </Text>
          <GButton label={'Confirm'} />
          <Text variant={'title'}>OR</Text>
          <Button variant={'outline'} colorScheme={'red'} w={'80%'}>
            Ignore
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
