import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import BottomComponent from './BottomComponent'
import { windowHeight, windowWidth } from '../global'
import UserMessage from './UserMessage'

const defaultWallpaper = require('../../assets/images/defaultWallpaper.png')

const Chat = ({navigation}) => {
  const [message,setMessage] = useState('')

  return (
    <View style={styles.chatContainer}>
      <ImageBackground source={defaultWallpaper} style={styles.chatBackground} resizeMode='stretch'>
          <ChatHeader navigation={navigation} />
          <UserMessage message={'Hello'}/>
          <BottomComponent 
            message={message} 
            setMessage={setMessage}/>
      </ImageBackground>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
  },
  chatBackground: {
    width: '100%',
    height: '100%'
  }
})