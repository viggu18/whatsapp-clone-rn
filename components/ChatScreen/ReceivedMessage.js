import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReceivedMessage = ({message}) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

export default ReceivedMessage

const styles = StyleSheet.create({})