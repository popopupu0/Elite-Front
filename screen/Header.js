import React from "react";
import { Image, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';

const Header = () => {
    
    return (
        <View style={style.body}>
            <TouchableOpacity style={style.button} >
                <Image source={require('../assets/images/icons/back.png')} resizeMode='contain' style={{width: 30, height: 30,}}/>
            </TouchableOpacity>
            <View style={style.view1}>
                <Text style={style.font}>เลขบัญชี</Text>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    body: {
        flexDirection: 'row',
        height: 50,
    },
    view1: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'center',
    },
    font: {
        fontSize: 18,
        color: '#000000',
    },
    button: {
        width:50,
        paddingLeft: 20,
        justifyContent: 'center'
    },
})

export default Header;