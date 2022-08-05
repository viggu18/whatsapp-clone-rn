import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from './Header';
import { Button } from 'react-native-paper';
import { windowHeight,windowWidth } from '../global';

const RegisterUser = ({navigation}) => {
  const [Code,setCode] = useState();

  const verifier = () => {
    navigation.navigate('HomeNav')
  }

  return (
    <View style={styles.RegisterUserContainer}>
        <Header title="Verify your phone number" Menu={true} />
        <Button mode='contained' color='#128C7E' style={styles.verifier} onPress={verifier}>Verify</Button>
    </View>
  )
}

export default RegisterUser

const styles = StyleSheet.create({
  RegisterUserContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  verifier: {
    alignSelf: 'center',
    width: windowWidth*0.25,
    bottom: 0
  }
})