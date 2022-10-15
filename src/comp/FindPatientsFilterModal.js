import { CheckIcon, HStack, Input, Modal, Select, Text, VStack } from 'native-base';
import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import GButton from './GButton';

export default function FindPatientsFilterModal({ modalVisible, onClose }) {
  const windowHeight = Dimensions.get('window').height;
  return (
    <Modal
      isOpen={modalVisible}
      size="full"
      onClose={onClose}
      justifyContent="space-between"
      pl={10}
      safeAreaTop
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Body height={windowHeight - 150} p={0}>
          <Text variant="mainTitle" p={5} pb={0}>
            Search by Filter
          </Text>
          <VStack flex={1} p={5} space={4}>
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
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

FindPatientsFilterModal.propTypes = {
  modalVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

FindPatientsFilterModal.defaultProps = {
  modalVisible: false,
  onClose: () => {},
};
