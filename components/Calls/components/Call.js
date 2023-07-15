import { StyleSheet, Text, View, TouchableOpacity,Modal,TouchableWithoutFeedback} from 'react-native'
import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../../global';
import ProfilePicture from 'react-native-profile-picture';
import { Icon } from '@rneui/themed';
import ProfilePictureView from '../../ChatList/components/ProfilePictureView';

const defaultPicture = require('../../../assets/images/blank-profile.png')

const Call = ({navigation}) => {
    const [modalVisible,setModalVisible] = useState(false)
  return (
    <>
    <Modal 
        visible={modalVisible}
        style={{flex:1,height: windowHeight,width: windowWidth,backgroundColor:'black'}}
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}
        animationType='fade'>
        <TouchableWithoutFeedback onPress={()=>{setModalVisible(false)}}>
          <View style={styles.sideHandler}>
            <ProfilePictureView setModalVisible={setModalVisible}/>
          </View>
        </TouchableWithoutFeedback>
    </Modal>
    <TouchableOpacity style={styles.LogContainer}>
    <TouchableOpacity activeOpacity={0.6} onPress={()=>navigation.navigate('CallDetails')}>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>setModalVisible(true)} style={styles.profileContainer}>
            <ProfilePicture 
                requirePicture={defaultPicture}
                width={55}
                height={55}
                isPicture={true}
                shape='circle'/>
            </TouchableOpacity>
            <View style={styles.DetailsContainer}>
                <View style={styles.Details}>
                    <Text style={styles.callerName}>Raksha</Text>
                    <Text>August 3, 4:37 PM</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.6} style={styles.callIcon}>
           <Icon type='material' name='call' color='#128C7E'/>
    </TouchableOpacity>
    </TouchableOpacity>
    </>
  )
}

export default Call

const styles = StyleSheet.create({
    LogContainer: {
        width: windowWidth,
        height: windowHeight*0.1,
        flexDirection: 'row'
        // backgroundColor: 'black'
    },
    profileContainer: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        // backgroundColor: 'black',
    },
    DetailsContainer: {
        width: '68%',
        height: '100%',
        // backgroundColor: 'black'
    },
    Details: {
        margin: 15
    },
    callerName: {
        fontWeight: '500',
        fontSize: 15,
    },
    callIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    sideHandler: {
        flex: 1
    }
})