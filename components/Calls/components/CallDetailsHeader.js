import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { Icon } from '@rneui/themed';
import { windowHeight, windowWidth } from '../../global';

const CallDetailsHeader = ({navigation}) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.BackBtn}>
        <Icon type='ionicon' name='arrow-back' color='#52657d' style={{marginRight: 5}}/>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconHolder}>
            <Icon type='ionicon' name='chatbox' color='white'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconHolder}>
            <Icon type='material' name='more-vert' color='white'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CallDetailsHeader

const styles = StyleSheet.create({
    HeaderContainer: {
        width: windowWidth,
        height: windowHeight*0.1,
        backgroundColor: '#128C7E',
        flexDirection: 'row'
    },
    BackBtn: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightContainer:{
        position: 'absolute',
        right: 0,
        width: '20%',
        height: '100%',
        flexDirection: 'row'
    },
    iconHolder:{
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    }
})