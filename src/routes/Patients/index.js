import { ScrollView } from 'native-base';
import React from 'react';

import { SafeAreaView } from 'react-native';
import FindPatientsFilterModal from '../../comp/FindPatientsFilterModal';
import Header from '../../comp/Header';
import PharmaciesCard from '../../comp/PharmaciesCard';

export default function Patients({ navigation }) {
  const [showPatientFilterModal, setShowPatientFilterModal] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header searchable title="Patients" onPressFilter={() => setShowPatientFilterModal(true)} />
      <ScrollView mt={2}></ScrollView>
      <FindPatientsFilterModal
        modalVisible={showPatientFilterModal}
        onClose={() => setShowPatientFilterModal(false)}
      />
    </SafeAreaView>
  );
}
