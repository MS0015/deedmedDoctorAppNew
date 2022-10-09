import { HStack, Text, VStack } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

export default function PharmaciesCard({ onPress, noMoreInfo = false, noShadow = false }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <VStack mx={4} my={1} p={4} bg="white" borderRadius={10} shadow={!noShadow ? 2 : -1}>
        <HStack space={3}>
          <VStack>
            <ImageBackground
              style={{ width: 70, height: 70, alignItems: 'flex-end', justifyContent: 'flex-end' }}
              imageStyle={{ borderRadius: 10 }}
              source={require('../asset/img/dr.jpg')}
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
            <HStack justifyContent="space-between">
              <Text variant="mainTitle">Medicare Pharmacy</Text>
              <AntDesign name="heart" color="red" size={25} />
            </HStack>
            <Text variant="desc" color="blue.600" fontSize="sm">
              Colombo
            </Text>
            <HStack justifyContent="space-between">
              <Text variant="desc" fontSize="md" color="gray.600">
                <Octicons name="dot-fill" color="blue" size={20} /> 69 Patient
              </Text>
              {!noMoreInfo && (
                <TouchableOpacity
                  onPress={onPress}
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                  <Text variant="mainTitle" color="blue.600" fontSize="sm">
                    More info{' '}
                  </Text>
                  <Octicons name="arrow-right" color="blue" size={20} />
                </TouchableOpacity>
              )}
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
}
