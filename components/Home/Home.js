import { StyleSheet, Text, View,ScrollView} from 'react-native'
import React from 'react'
import Header from './Header'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ChatList from '../ChatList/ChatList'
import Status from './components/Status'
import Calls from './components/Calls'
import { useIsFocused } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const isFocused = useIsFocused();

  return (
    <View style={styles.HomeContainer}>
      <Header/>
      {/* <ScrollView>
      <TopNavigator />
      </ScrollView> */}
      <Tab.Navigator screenOptions={
            {tabBarStyle: styles.navBar,
              tabBarItemStyle: styles.navBarItem,
              tabBarLabelStyle: styles.navBarLabel,
              tabBarActiveTintColor : '#128C7E',
              tabBarInactiveTintColor: '#858a84',
            }} 
            tabBarPosition='top' initialRouteName='Chats'>
            <Tab.Screen name='Chats' component={ChatList}/>
            <Tab.Screen name='Status' component={Status} />
            <Tab.Screen name='Calls' component={Calls} />
        </Tab.Navigator>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  HomeContainer: {
    flex:1
  },
  navBar: {
    backgroundColor:'#075E54'
  },
  navBarLabel: {
    fontWeight: 'bold',
  }
})