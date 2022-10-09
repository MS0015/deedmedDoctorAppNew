import { useNavigation } from '@react-navigation/native';
import { VStack } from 'native-base';
import React from 'react';

import OrderCard from '../../../comp/OrderCard';

export default function AcceptedTab() {
  const navigation = useNavigation();
  return (
    <VStack space={2} mt={2}>
      <OrderCard onPress={() => navigation.navigate('OrderDetails')} />
      <OrderCard />
      <OrderCard />
    </VStack>
  );
}
