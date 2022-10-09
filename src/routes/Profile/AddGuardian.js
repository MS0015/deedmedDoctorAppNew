import {
  Avatar,
  Box,
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  ScrollView,
  Select,
  Text,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';

import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PatientCard from '../../comp/PatientCard';
import GButton from '../../comp/GButton';

export default function AddGuardian({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={{
          padding: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#0452E5', '#01B7EB']}
      >
        <HStack alignItems="center" mt={3} space={2}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Box bg="white" borderRadius={6} p={1}>
              <Feather name="chevron-left" size={20} />
            </Box>
          </TouchableOpacity>
          <Text variant="mainTitle" color="white">
            Add Guardian
          </Text>
        </HStack>
        <View>
          <HStack justifyContent="space-between" alignItems="center" mt={2} space={4}>
            <Avatar size="lg" source={require('../../asset/img/dr.jpg')} />
            <VStack>
              <Text variant="mainTitle" color="white">
                Set up your Profile
              </Text>
              <Text variant="desc" color="gray.300" w={300}>
                Update your profile to connect your doctor with better impression.
              </Text>
            </VStack>
          </HStack>
        </View>
      </LinearGradient>
      <ScrollView>
        <VStack p={3} bg="white" flex={1} space={4}>
          <Text variant="mainTitle">Personal information</Text>

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
              Date of Birth
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
              Gender
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
              Phone
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

          <VStack
            bg="white"
            p={2}
            borderRadius={10}
            shadow={2}
            borderWidth={1}
            borderColor="gray.100"
          >
            <Text variant="mainTitle" fontSize="xs" color="blue.600" ml={3}>
              District
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
              Allergies
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
              Long term medications currently having
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
