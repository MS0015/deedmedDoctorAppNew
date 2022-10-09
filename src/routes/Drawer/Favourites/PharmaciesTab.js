import { VStack } from 'native-base';
import React from 'react';

import PharmaciesCard from '../../../comp/PharmaciesCard';

export default function PharmaciesTab() {
  return (
    <VStack space={2} mt={2}>
      <PharmaciesCard />
      <PharmaciesCard />
      <PharmaciesCard />
      <PharmaciesCard />
    </VStack>
  );
}
