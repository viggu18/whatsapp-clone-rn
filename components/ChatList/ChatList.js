import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ChatItem from './components/ChatItem';
import { windowHeight,windowWidth } from '../global';

const ChatList = ({navigation}) => {
  return (
    <ScrollView>
      <ChatItem navigation={navigation}/>
    </ScrollView>
  )
}

export default ChatList

const styles = StyleSheet.create({

})