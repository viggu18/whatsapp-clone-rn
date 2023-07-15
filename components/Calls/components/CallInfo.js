import { StyleSheet, Text, View, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react';
import ProfileView from './ProfileView';
import CallLog from './CallLog';
import ProfilePictureView from '../../ChatList/components/ProfilePictureView';

const CallInfo = () => {
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
    <View>
      <ProfileView setModalVisible={setModalVisible}/>
      <CallLog />
    </View>
    </>
  )
}

export default CallInfo

const styles = StyleSheet.create({
    sideHandler: {
        flex: 1
    }
})