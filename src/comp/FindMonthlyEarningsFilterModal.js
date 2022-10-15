import { Actionsheet, CheckIcon, HStack, Input, Select, Text, VStack } from 'native-base';
import React from 'react';
import GButton from './GButton';

export default function FindMonthlyEarningsFilterModal({ modalVisible, onClose }) {
  return (
    <Actionsheet isOpen={modalVisible} onClose={onClose} _backdrop={false}>
      <Actionsheet.Content>
        <VStack>
          <Text variant="mainTitle" p={5} pb={0}>
            Search by Filter
          </Text>
          <VStack p={5} space={4}>
            <Input placeholder="Location" />
            <Select
              minWidth="200"
              placeholder="Serving area"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
            <Input placeholder="Delivery distance from the location" />
          </VStack>
          <HStack justifyContent="space-between" alignItems="center">
            <GButton textColor="black" color={['#E7E7E7', '#E7E7E7']} label="Reset" w="50%" />

            <GButton label="Done" w="50%" />
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
