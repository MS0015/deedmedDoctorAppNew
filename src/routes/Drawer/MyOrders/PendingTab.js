import { VStack } from 'native-base';
import React from 'react';

import DoctorCard from '../../../comp/DoctorCard';
import OrderCard from '../../../comp/OrderCard';

export default function PendingTab() {
  return (
    <VStack space={2} mt={2}>
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </VStack>
  );
}
