import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import ProfilePicture from 'react-native-profile-picture';
import { windowHeight, windowWidth } from '../../global';

const defaultPicture = require('../../../assets/images/blank-profile.png')

const ProfileView = ({setModalVisible}) => {
  return (
    <View style={styles.profileViewContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={()=>setModalVisible(true)} style={styles.profilePicture}>
            <ProfilePicture 
                requirePicture={defaultPicture}
                width={60}
                height={60}
                isPicture={true}
                shape='circle'/>
        </TouchableOpacity>
        <View style={styles.userNameView}>
            <Text>Raksha</Text>
            <Text>The Brave Don't live forever</Text>
        </View>
    </View>
  )
}

export default ProfileView

const styles = StyleSheet.create({
    profileViewContainer: {
        width: windowWidth,
        height: windowHeight *0.13,
        flexDirection: 'row',
    },
    profilePicture: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    userNameView: {
        width: '60%',
        height: '100%',
    }
})