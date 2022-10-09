import { Box, Checkbox, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { SafeAreaView, View } from 'react-native';
import Header from '../../../comp/Header';

export default function AddPrescription() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={'Add Prescription'} />

      <VStack m={5} space={5}>
        <Box bg={'white'} p={3} borderRadius={10}>
          <Checkbox colorScheme="green">
            <HStack space={2}>
              <VStack h={70} w={50} bg="red.100" />
              <VStack>
                <Text variant={'mainTitle'}>Eye pressure Consultation</Text>
                <Text variant={'desc'}>Dr.Anjana Perera</Text>
                <Text color={'blue.500'}>Yesterday</Text>
              </VStack>
            </HStack>
          </Checkbox>
        </Box>
        <Box bg={'white'} p={3} borderRadius={10}>
          <Checkbox colorScheme="green">
            <HStack space={2}>
              <VStack h={70} w={50} bg="red.100" />
              <VStack>
                <Text variant={'mainTitle'}>Eye pressure Consultation</Text>
                <Text variant={'desc'}>Dr.Anjana Perera</Text>
                <Text color={'blue.500'}>Yesterday</Text>
              </VStack>
            </HStack>
          </Checkbox>
        </Box>
        <Box bg={'white'} p={3} borderRadius={10}>
          <Checkbox colorScheme="green">
            <HStack space={2}>
              <VStack h={70} w={50} bg="red.100" />
              <VStack>
                <Text variant={'mainTitle'}>Eye pressure Consultation</Text>
                <Text variant={'desc'}>Dr.Anjana Perera</Text>
                <Text color={'blue.500'}>Yesterday</Text>
              </VStack>
            </HStack>
          </Checkbox>
        </Box>
      </VStack>
    </SafeAreaView>
  );
}
