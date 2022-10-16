import { Avatar, Box, Divider, HStack, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { SafeAreaView, View } from 'react-native';
import Header from '../../comp/Header';

export default function PatientDetails() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={'Patient Details'} />
      <ScrollView>
        <Box m={3} bg="white" p={3}>
          <HStack space={4} mb={2}>
            <Avatar />
            <VStack>
              <Text variant="mainTitle">Jannet Walton</Text>
              <Text variant="desc" color="gray.500">
                Patient
              </Text>
            </VStack>
          </HStack>
          <Divider />
          <HStack mt={2} space={3}>
            <VStack alignItems={'center'} bg={'gray.100'} borderRadius={3} shadow={2} p={3}>
              <Text variant={'bold'}>10</Text>
              <Text variant={'semiBold'}>Appoinments</Text>
            </VStack>
            <VStack alignItems={'center'} bg={'gray.100'} borderRadius={3} shadow={2} p={3}>
              <Text variant={'bold'}>10</Text>
              <Text variant={'semiBold'}>Appoinments</Text>
            </VStack>
          </HStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
