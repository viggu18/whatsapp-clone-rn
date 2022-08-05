import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from '@rneui/themed';
import React,{useState} from 'react'
import { windowHeight, windowWidth } from '../global'
import {Button, Menu, Divider, Provider } from 'react-native-paper';

const Header = () => {
    const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.ChatListHeader}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>WhatsApp</Text>
        </View>
        <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.searchIconContainer} activeOpacity={0.6}>
            <Icon name='search' type='material' style={styles.searchIcon} color='#128C7E'/>
        </TouchableOpacity>
        <View style={styles.moreOptionsContainer}>
                <Provider>
                    <View
                        style={{
                            alignItems:'center',
                            height: windowHeight*0.09,
                            justifyContent: 'center',
                                }}>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={
                            <TouchableOpacity onPress={()=>setVisible(!visible)} activeOpacity={0.6}>
                                <Icon type="material" color="#128C7E" name="more-vert" />
                            </TouchableOpacity>}>
                        <Menu.Item onPress={() => {}} title="Item 1" />
                        <Menu.Item onPress={() => {}} title="Item 2" />
                        <Divider />
                        <Menu.Item onPress={() => {}} title="Item 3" />
                        </Menu>
                    </View>
                </Provider>
        </View>
        </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    ChatListHeader: {
        backgroundColor: '#075E54',
        // minHeight: windowHeight*0.1,
        // maxHeight: windowHeight*0.1,
        height: windowHeight*0.09,
        width: windowWidth,
        flexDirection: 'row'
    },
    titleContainer:{
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '40%'
    },
    title: {
        alignSelf:'center',
        fontWeight: 'bold',
        fontSize: 26,
        color: '#128C7E',
    },
    rightContainer: {
        width: windowWidth*0.1,
        height: windowHeight * 0.09,
        flexDirection: 'row',
        position: 'absolute',
        right: 40
    },
    searchIconContainer: {
        width:'auto',
        minWidth: windowWidth*0.1,
        height: 'auto',
        // minHeight: windowHeight*0.09,
        // backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        alignSelf:'center',
    },
    moreOptionsContainer:{
        // backgroundColor: 'black',
        width: 'auto',
        minWidth: windowWidth*0.1,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    }
})