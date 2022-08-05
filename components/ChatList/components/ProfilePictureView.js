import { StyleSheet, Text, View,Image,TouchableWithoutFeedback,TouchableOpacity } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../global'
import { Icon } from '@rneui/themed'

const defaultPicture = require('../../../assets/images/blank-profile.png')

const IconHolder = ({type,name}) => (
    <TouchableOpacity style={styles.iconHolder}>
      <Icon type={type} name={name} color='#128C7E'/>
    </TouchableOpacity>
  )

const BottomBar = ({navigation}) => {
  return(
    <View style={styles.bottomBarContainer}>
      <IconHolder type='ionicon' name='chatbox'/>
      <IconHolder type='material' name='call'/>
      <IconHolder type='ionicon' name='ios-videocam'/>
      <IconHolder type='material' name='info-outline'/>
    </View>
  );
}

const ProfilePictureView = ({setModalVisible}) => {
  return (
      <TouchableWithoutFeedback>
      <View style={styles.profileModalContainer}>
        <Image source={defaultPicture} style={styles.image} resizeMode='cover'/>
        <BottomBar />
      </View>
      </TouchableWithoutFeedback>
  )
}

export default ProfilePictureView

const styles = StyleSheet.create({
  profileModalContainer: {
    marginTop: windowHeight*0.25,
    width: windowWidth*0.45,
    height: windowHeight*0.32,
    alignSelf:'center'
  },
  image: {
    width: '100%',
    height: '82%',
  },
  bottomBarContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '18%',
    // backgroundColor: 'black'
  },
  iconHolder: {
    justifyContent: 'center',
    width: '25%',
    height: '100%',
  }
})