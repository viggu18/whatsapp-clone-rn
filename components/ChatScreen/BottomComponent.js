import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../global'
import { Icon } from '@rneui/themed'

const BottomComponent = ({message,setMessage}) => {
  return (
    <View style={styles.BottomComponentContainer}>
        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.emojiButton}>
                <Icon 
                    type='material' 
                    name='emoji-emotions' 
                    style={styles.emojiIcon} 
                    size={30} 
                    color='black'/>
            </TouchableOpacity>
            <TextInput 
                placeholder='Enter your message here' 
                value={message} onChangeText={(text)=>setMessage(text)}
                style/>
            <TouchableOpacity style={styles.fileModal}>
                <Icon 
                    type='feather' 
                    name='paperclip' 
                    style={styles.emojiIcon} 
                    size={25} 
                    color='black'/>
            </TouchableOpacity>
        </View>
        <View style={styles.voiceComponent}>
            <TouchableOpacity style={styles.micHolder}>
                <Icon type='material-community' name='microphone' style={styles.mic} size={30} color='black'/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BottomComponent

const styles = StyleSheet.create({
    BottomComponentContainer: {
        position:'absolute',
        bottom: 0,
        width: windowWidth,
        height: windowHeight * 0.1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputContainer: {
        backgroundColor: 'white',
        width: '80%',
        height: '70%',
        margin: 5,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent:'center'
    },
    emojiButton: {
        backgroundColor: 'white',
        // justifyContent: 'center',
        borderRadius: 30
    },
    emojiIcon: {
        width: 30,
        height: 30,
        margin: 8
    },
    fileModal: {
     position: 'absolute',
     right: 0,
     borderRadius: 30,
     justifyContent: 'center',
     marginTop: '1%'
    },
    micHolder: {
        borderRadius: 30,
        backgroundColor: '#128C7E',
        width: 45,
        height: 45,
        justifyContent: 'center'
    },
    voiceComponent: {
        justifyContent: 'center'
    }
})