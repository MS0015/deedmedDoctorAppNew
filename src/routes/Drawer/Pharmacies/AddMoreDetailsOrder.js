import {
  CheckIcon,
  FormControl,
  Input,
  ScrollView,
  Select,
  Text,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';

import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GButton from '../../../comp/GButton';
import Header from '../../../comp/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function AddMoreDetailsOrder({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={'Add More Details'} />
      <ScrollView>
        <VStack p={3} bg="white" flex={1} space={4}>
          <VStack
            bg="white"
            p={2}
            borderRadius={10}
            shadow={2}
            borderWidth={1}
            borderColor="gray.100"
          >
            <Text variant="mainTitle" fontSize="xs" color="blue.600" ml={3}>
              Name
            </Text>
            <FormControl>
              <Input _focus={{ bg: 'white' }} borderWidth={0} />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Please make a selection!
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>

          <VStack
            bg="white"
            p={2}
            borderRadius={10}
            shadow={2}
            borderWidth={1}
            borderColor="gray.100"
          >
            <Text variant="mainTitle" fontSize="xs" color="blue.600" ml={3}>
              Contact Number
            </Text>
            <FormControl>
              <Input
                _focus={{ bg: 'white' }}
                borderWidth={0}
                InputRightElement={<MaterialIcons name="edit" size={20} color="gray" />}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Please make a selection!
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>

          <VStack
            bg="white"
            p={2}
            borderRadius={10}
            shadow={2}
            borderWidth={1}
            borderColor="gray.100"
          >
            <Text variant="mainTitle" fontSize="xs" color="blue.600" ml={3} mb={-2}>
              Date of birth
            </Text>
            <FormControl>
              <Select
                borderWidth={0}
                // selectedValue={service}
                // onValueChange={(itemValue) => setService(itemValue)}
                minWidth="200"
                placeholder="Gender"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1"
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Please make a selection!
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>

          <VStack
            bg="white"
            p={2}
            borderRadius={10}
            shadow={2}
            borderWidth={1}
            borderColor="gray.100"
          >
            <Text variant="mainTitle" fontSize="xs" color="blue.600" ml={3}>
              Email
            </Text>
            <FormControl>
              <Input
                _focus={{ bg: 'white' }}
                borderWidth={0}
                InputRightElement={<MaterialIcons name="edit" size={20} color="gray" />}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Please make a selection!
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>

          <VStack
            bg="white"
            p={2}
            borderRadius={10}
            shadow={2}
            borderWidth={1}
            borderColor="gray.100"
          >
            <Text variant="mainTitle" fontSize="xs" color="blue.600" ml={3}>
              Location
            </Text>
            <FormControl>
              <Input
                _focus={{ bg: 'white' }}
                borderWidth={0}
                InputRightElement={<MaterialIcons name="edit" size={20} color="gray" />}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Please make a selection!
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>

          <VStack
            bg="white"
            p={2}
            borderRadius={10}
            shadow={2}
            borderWidth={1}
            borderColor="gray.100"
          >
            <Text variant="mainTitle" fontSize="xs" color="blue.600" ml={3}>
              Add Multiple Prescriptions
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddPrescription')}
              style={{ marginTop: 10 }}
            >
              <Text color="blue.500" alignSelf="center">
                Add more <FontAwesome name="plus-circle" />
              </Text>
            </TouchableOpacity>
          </VStack>

          <VStack
            bg="white"
            p={2}
            borderRadius={10}
            shadow={2}
            borderWidth={1}
            borderColor="gray.100"
          >
            <Text variant="mainTitle" fontSize="xs" color="blue.600" ml={3}>
              Address
            </Text>
            <FormControl>
              <Input
                _focus={{ bg: 'white' }}
                borderWidth={0}
                InputRightElement={<MaterialIcons name="edit" size={20} color="gray" />}
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Please make a selection!
              </FormControl.ErrorMessage>
            </FormControl>
          </VStack>

          <GButton label={'Save'} style={{ alignSelf: 'center' }} />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
