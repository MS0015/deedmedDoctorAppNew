import { Divider, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default function PaymentDetailsCard({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <VStack mx={4} mt={2} bg="white" borderRadius={5} shadow={2}>
        <VStack>
          <Text px={3} py={2} variant="mainTitle" fontSize="md">
            Fever consultaion
          </Text>
          <Divider />
          <HStack space={3} p={3}>
            <VStack>
              <Image
                style={{
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
                source={require('../asset/img/dr.jpg')}
                resizeMode="cover"
              />
            </VStack>
            <VStack flex={1}>
              <HStack justifyContent="space-between" alignItems="center">
                <VStack>
                  <Text variant="title" fontSize="md">
                    Dr Ken
                  </Text>
                  <Text variant="desc" color="gray.400" fontSize="xs">
                    Online
                  </Text>
                </VStack>
                <VStack>
                  <Text variant="desc" color="gray.400" fontSize="xs">
                    Date
                  </Text>
                  <Text variant="title" fontSize="md">
                    03 Jan 2022
                  </Text>
                </VStack>
                <Text variant="mainTitle" color="blue.600">
                  LKR 250
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
}
