import { StyleSheet, Text, View,TouchableOpacity,Modal,TouchableWithoutFeedback} from 'react-native'
import React, { useState } from 'react'
import Details from './Details'
import ProfilePicture from 'react-native-profile-picture'
import { windowHeight, windowWidth } from '../../global'
import ProfilePictureView from './ProfilePictureView'


const defaultPicture = require('../../../assets/images/blank-profile.png')

const ChatItem = ({navigation}) => {
  const [modalVisible,setModalVisible] = useState(false)


  return (
    <>
    <Modal 
        visible={modalVisible}
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}
        animationType='fade'>
        <TouchableWithoutFeedback onPress={()=>{setModalVisible(false)}}>
          <View style={styles.sideHandler}>
            <ProfilePictureView setModalVisible={setModalVisible}/>
          </View>
        </TouchableWithoutFeedback>
    </Modal>
    <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}} activeOpacity={0.6}>
    <View style={styles.ChatItem}>
      <TouchableOpacity style={styles.ProfilePictureContainer} onPress={()=>{setModalVisible(true)}}>
        <ProfilePicture 
            requirePicture={defaultPicture}
            width={60}
            height={60}
            isPicture={true}
            shape='circle'/>
      </TouchableOpacity>
      <Details name='Bhat' lastMessage='Pottu' lastMessageTime={'03:55'}/>
    </View>
  </TouchableOpacity>
  </>
  )
}

export default ChatItem

const styles = StyleSheet.create({
    ChatItem: {
        width: windowWidth,
        height: windowHeight * 0.13,
        flexDirection: 'row',
        // backgroundColor: 'black'
    },
    ProfilePictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 0.22,
        // backgroundColor: 'green'
    },
    sideHandler: {
      position: 'absolute',
      width: windowWidth,
      height: windowHeight,
      alignContent: 'center'
  },
})