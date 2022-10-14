import { Button, Divider, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../comp/Header';
import GButton from '../../comp/GButton';
import LinearGradient from 'react-native-linear-gradient';

export default function RequestChangeTime() {
  return (
    <SafeAreaView>
      <Header title="Request Change Time" />

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
        <HStack mt={2} justifyContent={'space-between'} alignItems={'center'}>
          <Text variant="mainTitle" color="blue.600" fontSize="lg">
            Today at 2:00 PM
          </Text>
          <Text variant="desc" fontSize="xs" color="gray.600">
            View Details
          </Text>
        </HStack>
        <Divider my={2} />
        <VStack alignItems="center" space={3}>
          <Text variant="mainTitle" color="blue.600" fontSize="lg">
            2022-10-21 at 2:00 PM
          </Text>

          <Text variant={'mainTitle'}>Choose Time</Text>

          <HStack space={2} justifyContent={'space-between'}>
            <Slot />
            <Slot />
            <Slot />
          </HStack>

          <GButton label="Confirm" />
          <Text variant="title">OR</Text>
          <Button variant="outline" colorScheme="red" w="80%">
            Cancel Appoinment
          </Button>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}

function Slot() {
  return (
    <TouchableOpacity style={{ width: '30%' }}>
      <LinearGradient
        style={{
          borderRadius: 5,
          width: '100%',
          padding: 7,
          marginVertical: 2,
          alignItems: 'center',
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#0452E5', '#01B7EB']}
      >
        <Text variant="title" color="white" fontSize={'md'}>
          2:00 PM
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
