import { Text, Image, Center, Button, View } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import GButton from '../../comp/GButton';
import { SafeAreaView } from 'react-native';

function OnBoard() {
  const navigation = useNavigation();

  return (
    <SafeAreaView flex={1}>
      <Image
        style={{ position: 'absolute', top: 0, zIndex: 1, width: '100%' }}
        source={require('../../asset/img/upWaves.png')}
      />
      <Image
        style={{ position: 'absolute', bottom: 0, zIndex: 1, width: '100%' }}
        source={require('../../asset/img/downWaves.png')}
      />
      <Center justifyContent="center" flex={1} bg="#edf3f5">
        <Image
          source={require('../../asset/img/logo.png')}
          alt="Marketplace img"
          size="3xs"
          resizeMode="contain"
          mb={5}
        />
        <GButton label="Login" onPress={() => navigation.navigate('Login')} />

        <Button variant="outline" width="80%" m={1} onPress={() => navigation.navigate('Signup')}>
          <Text variant="mainTitle" color="#0452E5">
            Signup
          </Text>
        </Button>
      </Center>
    </SafeAreaView>
  );
}

export default OnBoard;
