import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallDetailsHeader from './CallDetailsHeader'
import CallInfo from './CallInfo'

const CallDetails = ({navigation}) => {
  return (
    <View>
      <CallDetailsHeader navigation={navigation}/>
      <CallInfo />
    </View>
  )
}

export default CallDetails

const styles = StyleSheet.create({})