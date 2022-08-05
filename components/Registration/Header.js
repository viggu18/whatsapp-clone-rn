import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'
import { Menu } from 'react-native-paper'
import { windowHeight,windowWidth} from '../../components/global'

const Header = ({title,Menu,navigation}) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.Header}>
            <Text style={styles.RegistrationTitle}>{title}</Text>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Header: {
        width: windowWidth,
        height: windowHeight * 0.08,
        backgroundColor: 'black',
        justifyContent:'center'
    },
    RegistrationTitle:{
        color:'#128C7E',
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})