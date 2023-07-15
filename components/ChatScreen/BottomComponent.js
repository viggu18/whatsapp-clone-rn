import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../global'
import { Icon } from '@rneui/themed'

const BottomComponent = ({message,setMessage}) => {
  return (
    <View style={styles.BottomComponentContainer}>
        <View style={styles.parentInput}>
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
                multiline={true}
                placeholder='Enter your message here' 
                value={message} onChangeText={(text)=>setMessage(text)}
                style={styles.messageInput}/>
            <TouchableOpacity style={styles.fileModal}>
                <Icon 
                    type='feather' 
                    name='paperclip' 
                    style={styles.emojiIcon} 
                    size={25} 
                    color='black'/>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.voiceComponent}>
            <TouchableOpacity style={styles.micHolder} activeOpacity={0.6}>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    parentInput:{
        justifyContent: 'center',
        width: '80%',
        height: '70%',
        // marginRight: ''
    },
    inputContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        borderRadius: 30,
        flexDirection: 'row',
    },
    emojiButton: {
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 30
    },
    emojiIcon: {
        width: 30,
        height: 30,
        margin: 8
    },
    messageInput: {
        position: 'relative',
        width: 'auto',
        width: '70%'
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
        width: 50,
        height: 50,
        justifyContent: 'center',
        marginLeft: 10
    },
    voiceComponent: {
        justifyContent: 'center'
    }
})