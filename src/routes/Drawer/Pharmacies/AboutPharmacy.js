import { Text, VStack } from 'native-base';
import React from 'react';

import { SafeAreaView, View } from 'react-native';
import GButton from '../../../comp/GButton';
import Header from '../../../comp/Header';
import PharmaciesCard from '../../../comp/PharmaciesCard';

export default function AboutPharmacy({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Header title="Medicare Pharmacy" />
      <PharmaciesCard noMoreInfo />

      <VStack p={2} space={2}>
        <Text variant={'title'}>About this Pharmacy</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula nulla, aliquam ac
          lorem vitae, semper maximus velit. Donec sit amet mauris sit amet erat tincidunt gravida
          non quis arcu.
        </Text>
        <GButton
          label={'Order'}
          w={'40%'}
          onPress={() => navigation.navigate('AddMoreDetailsOrder')}
        />
      </VStack>
    </SafeAreaView>
  );
}
