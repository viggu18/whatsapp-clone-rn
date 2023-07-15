import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProfilePicture from 'react-native-profile-picture'
import { windowHeight, windowWidth } from '../global'
import { Icon } from '@rneui/themed'

const defaultPicture = require('../../assets/images/blank-profile.png')

const IconHolder = ({type,name}) => (
    <TouchableOpacity style={styles.iconHolder}>
      <Icon type={type} name={name} color='white'/>
    </TouchableOpacity>
  )


const ChatHeader = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.leftContainer} onPress={()=>navigation.goBack()} activeOpacity={0.6}>
                <Icon type='ionicon' name='arrow-back' color='#52657d' style={{marginRight: 5}}/>
                <ProfilePicture 
                    isPicture={true} 
                    requirePicture={defaultPicture} 
                    shape='circle'
                    width={40}
                    height={40}/>
        </TouchableOpacity>
        <View style={styles.nameHolder}>
            <Text style={styles.userName}>Vignesh</Text> 
        </View>
        <View style={styles.rightContainer}>
            <View style={styles.innerRightContainer}>
                <IconHolder type='ionicon' name='ios-videocam'/>
                <IconHolder type='material' name='call'/>
                <IconHolder type='material' name='more-vert'/>
            </View>
        </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
    headerContainer: {
        width: windowWidth,
        height: windowHeight * 0.1,
        backgroundColor: '#128C7E',
        flexDirection: 'row',
    },
    leftContainer: {
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: 'auto',
        minHeight: windowHeight * 0.1,
        flexDirection: 'row'
    },
    rightContainer: {
        width: '60%',
        height: '100%',
        flexDirection: 'row'
    },
    iconHolder: {
        justifyContent: 'center',
        width: '33%',
        height: '100%',
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginLeft: 5
    },
    nameHolder: {
        justifyContent: 'center',
        width: '20%'
    },
    innerRightContainer: {
        width: '60%',
        height: '100%',
        position: 'absolute',
        right: 0,
        flexDirection: 'row'
    }
})