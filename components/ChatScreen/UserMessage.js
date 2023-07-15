import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowWidth } from '../global'

const UserMessage = ({message}) => {
  return (
    <View style={styles.messageContainer}>
        <View style={styles.messageView}>
            {/* <View style={styles.triangle}>
            </View> */}
            <Text style={styles.message}>{message}</Text>
        </View>
    </View>
  )
}

export default UserMessage

const styles = StyleSheet.create({
    messageContainer: {
        width: 'auto',
        height: 'auto'
    },
    messageView: {
        width: 'auto',
        height: 'auto',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    message: {
        fontWeight: '400',
        fontSize: 15,
        margin: 5
    },  
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 30,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        transform: [{rotate: '296deg'}]
    }
})