import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../global'
import { Icon } from '@rneui/themed'

const Details = ({name,lastMessage,lastMessageTime}) => {
  return (
    <View style={styles.DetailsContainer}>
        <View style={{margin: 8}}>
            <Text style={styles.name}>{name}</Text>
            <Text>{lastMessage}</Text>
        </View>
        <View style={styles.timeContainer}>
            <Text style={{marginTop: '40%'}}>{lastMessageTime}</Text>
            <Icon name='pin' type='simple-line-icon' color='black' />
        </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    DetailsContainer: {
        width: windowWidth*0.78,
        height: windowHeight * 0.13,
        // backgroundColor: 'black'
        justifyContent: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    timeContainer:{
        position: 'absolute',
        right: 0,
        width: '15%',
        height: '100%',
        // justifyContent: 'center',
    }
})