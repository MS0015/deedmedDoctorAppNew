import { ScrollView } from 'native-base';
import React from 'react';

import { SafeAreaView } from 'react-native';
import FindPharmaciesFilterModal from '../../../comp/FindPharmaciesFilterModal';
import Header from '../../../comp/Header';
import PharmaciesCard from '../../../comp/PharmaciesCard';

export default function Pharmacies({ navigation }) {
  const [showPharmacyFilterModal, setShowPharmacyFilterModal] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        searchable
        title="Find Pharmacies"
        onPressFilter={() => setShowPharmacyFilterModal(true)}
      />
      <ScrollView mt={2}>
        <PharmaciesCard onPress={() => navigation.navigate('AboutPharmacy')} />
        <PharmaciesCard />
        <PharmaciesCard />
        <PharmaciesCard />
        <PharmaciesCard />
        <PharmaciesCard />
      </ScrollView>
      <FindPharmaciesFilterModal
        modalVisible={showPharmacyFilterModal}
        onClose={() => setShowPharmacyFilterModal(false)}
      />
    </SafeAreaView>
  );
}
