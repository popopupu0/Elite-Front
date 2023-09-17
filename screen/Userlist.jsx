import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

const App = () => {

    return (
        <SafeAreaView style={style.body}>
            <View style={style.header}>
                <TouchableOpacity style={Style_header.button}>
                        <Image source={require('./assets/images/icons/back.png')} resizeMode='contain' style={{width: 30, height: 30,}}/>
                </TouchableOpacity>
                <View style={Style_header.view1}>
                    <View>
                        <Text style={Style_header.font}>รายชื่อพนักงาน</Text>
                    </View>
                </View>
            </View>

            <View style={style.view1}>
                <Text style={style.text1_1}>ตี๋น้อย 111 พหล - </Text>
                <Text style={style.text1_2}>พนักงานเสิร์ฟ</Text>
            </View>

            <FlatList/>

        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#8f8f9',
    },
    header: {
        flexDirection: 'row',
        alignContent: 'center',
        height: 50,
    },
    view1: {
        padding: 15,
        flexDirection: 'row',
    },
    text1_1: {
        color: '#000000',
        fontSize: 14,
        marginLeft: 20,
    },
    text1_2: {
        color: '#fd0000',
        fontSize: 14,
    },
}
)

const Style_header = StyleSheet.create({
    body: {
        backgroundColor: '#000000',
        width: '100%',
        flexDirection: 'row',
        height: 50,
    },
    view1: {
        flex: 1,
        alignItems: 'start',
        justifyContent: 'center',
    },
    font: {
        paddingLeft: 30,
        fontSize: 18,
        color: '#000000',
    },
    button: {
        width:50,
        paddingLeft: 20,
        justifyContent: 'center'
    },
}
)

export default App