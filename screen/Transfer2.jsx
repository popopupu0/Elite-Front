import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={style.body}>
        <View style={style.view_h}>
            <TouchableOpacity style={Style_header.button}>
                    <Image source={require('./assets/images/icons/back.png')} resizeMode='contain' style={{width: 30, height: 30,}}/>
            </TouchableOpacity>
            <View style={Style_header.view1}>
                <View>
                    <Text style={Style_header.font}>เลขบัญชี</Text>
                </View>
            </View>
        </View>

        <View style={style.view1}>
            <Text style={style.text1}>จดจำ</Text>
            <Image source={require('./assets/images/image_fav.png')} resizeMode='contain' style={{width: '97%', height: 90,}}/>
        </View>

        <View style={style.view2}>
            <Text style={style.text}>เลขที่บัญชี</Text>
            <TextInput style={style.input1} placeholder='ใส่เลขที่บัญชี'></TextInput>
        </View>
        
        <View style={style.view2}>
            <Text style={style.text}>จำนวนเงิน</Text>
            <TextInput style={style.input2} placeholder='ใส่จำนวนเงิน'></TextInput>
        </View>

        <View style={style.view3}>
            <Text style={style.text}>จดจำ</Text>
            <TextInput style={style.input3} placeholder='ใส่ชื่อ'></TextInput>
        </View>

        <View style={style.view2}>
            <View style={style.button}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text_button}>ยืนยัน</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </SafeAreaView>
  )

}

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#8f8f9',
    },
    view_h: {
        flexDirection: 'row',
        alignContent: 'center',
        height: 50,
    },
    view1: {
        paddingTop: 15,
        paddingLeft: 15,
    },
    view2: {
        padding: 15
    },
    view3: {
        padding: 15,
        paddingBottom: 60
    },
    text: {
        color: '#000000',
        fontSize: 24,
        marginBottom: 15,
    },
    text1: {
        color: '#000000',
        fontSize: 24,
    },
    input1: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 23,
        textAlign: 'left',
        fontSize: 20,
        padding: 15,
    },
    input2: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#555',
        textAlign: 'right',
        fontSize: 20,
        padding: 15,
    },
    input3: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        textAlign: 'left',
        fontSize: 20,
        padding: 15,
    },
    text_button: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30
    },
    button: {
        width: '100%',
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ff7f',
        borderRadius: 12,
    },
    image: {
        width: 50,
        height: 50,
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
})

export default App