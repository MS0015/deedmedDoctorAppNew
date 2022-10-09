import { Avatar, HStack, Text, VStack } from 'native-base';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PatientCard() {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      borderRadius={10}
      borderWidth={1}
      borderColor="gray.300"
      shadow={3}
      p={2}
      bg="white"
    >
      <HStack space={4}>
        <Avatar />
        <VStack>
          <Text variant="mainTitle">Jannet Walton</Text>
          <Text variant="desc" color="gray.500">
            Patient
          </Text>
        </VStack>
      </HStack>
      <HStack space={2} alignItems="center">
        <FontAwesome name="edit" size={25} color="blue" />
        <FontAwesome name="trash-o" size={25} color="gray" />
      </HStack>
    </HStack>
  );
}
