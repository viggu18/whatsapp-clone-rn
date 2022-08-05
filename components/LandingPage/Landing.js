import React,{useEffect, useState} from "react";
import {View,ActivityIndicator,Text,StyleSheet,Image} from 'react-native';
import { windowHeight,windowWidth } from "../global";

const Landing = ({navigation}) =>{ 
    const [Loading,setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{navigation.navigate('Registration')}, 3000);
    },[])

    return(
        <View style={styles.EntryScreen}>
            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} resizeMode='cover'/>
            </View>
            <ActivityIndicator size="large" animating={Loading} color='#25D366' />
        </View>
    )
}

export default Landing;

const styles = StyleSheet.create({
    EntryScreen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    imageContainer: {
        width: windowWidth,
        height: windowHeight*0.7,
        justifyContent: 'center',
        alignSelf: 'center',
        // backgroundColor: 'black'
    },
    logo:{
        width: windowWidth*0.6,
        height: windowHeight*0.38,
        alignSelf:'center',
        // backgroundColor: 'black',
    },
})