// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from './components/LandingPage/Landing';

import RegisterUser from './components/Registration/RegisterUser';

import Home from './components/Home/Home';
import Chat from './components/ChatScreen/Chat';

import CallDetails from './components/Calls/components/CallDetails';

const screenOptions={
    headerShown: false,
    gestureEnabled: true,
    animationTypeForReplace: 'pop'
};

const Registration = () => {
    const Register = createNativeStackNavigator();

    return(
        <Register.Navigator screenOptions={screenOptions}>
            <Register.Screen name='RegisterUser' component={RegisterUser}/>
        </Register.Navigator>
    )
}

const HomeNav = () => {
    const ChatSection = createNativeStackNavigator();

    return(
        <ChatSection.Navigator screenOptions={screenOptions}>
            <ChatSection.Screen name='Home' component={Home}/>
            <ChatSection.Screen name='Chat' component={Chat}/>
            <ChatSection.Screen name='CallDetails' component={CallDetails}/>
        </ChatSection.Navigator>
    )
}


const RootNavigation = () => {
    
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Landing' screenOptions={screenOptions}>
                <Stack.Screen name='Landing' component={Landing}/>
                <Stack.Screen name='Registration' component={Registration} />
                <Stack.Screen name='HomeNav' component={HomeNav} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;