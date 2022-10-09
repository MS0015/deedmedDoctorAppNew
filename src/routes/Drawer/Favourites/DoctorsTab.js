import { VStack } from 'native-base';
import React from 'react';

import DoctorCard from '../../../comp/DoctorCard';

export default function DoctorsTab() {
  return (
    <VStack space={2} mt={2}>
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
    </VStack>
  );
}
