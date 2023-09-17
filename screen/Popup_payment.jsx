import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

const App = () => {

    return (
        <SafeAreaView style={style.body}>
            <View style={style.view1}>
                <Image source={require('./assets/images/pro_pic.png')} style={{width: 145, height: 145}}/>
            </View>
            <View style={style.view2}>
                <Text style={style.text1}>Firstname</Text>
                <Text style={style.text1}>Lastname</Text>
            </View>
            <View style={style.view3}>
                <Text style={style.text2_1}>จำนวนเงินคงเหลือ</Text>
                <Text style={style.text2_2}>900</Text>
            </View>
            <View style={style.view4}>
                <Text style={style.text3}>50 เครดิต/ชม.</Text>
                <Text style={style.text3}>4 ชม.</Text>
            </View>
            <View style={style.view5}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text_button}>จ่ายเงิน 200 เครดิต</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#8f8f9',
        justifyContent: 'center',
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
    },
    view4: {
        flexDirection: 'column',
        paddingTop: 30,
    },
    view5: {
        paddingTop: 60,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00ff7f',
        width: '80%',
        height: 100,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        color: '#000000',
        fontSize: 18,
        margin: 5,
        marginTop: 10,
    },
    text2_1: {
        color: '#000000',
        fontSize: 20,
        margin: 5,
    },
    text2_2: {
        color: '#000000',
        fontSize: 18,
        marginLeft: 50,
        margin: 10,
    },
    text3: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 32,
    },
    text_button: {
        width: '100%',
        color: '#000000',
        textAlign: 'center',
        fontSize: 28,
    },
}
)

export default App