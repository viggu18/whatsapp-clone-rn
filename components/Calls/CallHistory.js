import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react';
import Call from './components/Call';

const CallHistory = ({navigation}) => {
  return (
    <View>
      <Call navigation={navigation}/>
    </View>
  )
}

export default CallHistory

const styles = StyleSheet.create({})