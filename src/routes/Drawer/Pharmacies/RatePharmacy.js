import { Avatar, Input, Text, VStack } from 'native-base';
import React from 'react';

import { SafeAreaView } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import GButton from '../../../comp/GButton';
import Header from '../../../comp/Header';

export default function RatePharmacy() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Rate Pharmacy" />
      <VStack flex={1} justifyContent="center">
        <VStack bg="white" alignItems="center" p={4} m={4} borderRadius={10}>
          <Avatar borderRadius={5} size="xl" position="absolute" top={-40} />
          <Text mt={55} variant="title">
            Medicare Pharmacy
          </Text>
          <AirbnbRating showRating />
          <Input multiline h={20} placeholder="Very Calmfull Doctor" my={4} />
          <GButton label="Continue" />
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
