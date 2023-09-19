import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

const App = () => {

    return (
        <SafeAreaView style={style.body}>
            <View style={style.view3}>
                <View style={style.leftside}>
                    <Text style={style.text2_1}>จำนวนเงินคงเหลือ </Text>
                </View>
                <View style={style.rightside}>
                    <Text style={style.text2_2}>900</Text>
                </View>
            </View>
            <View style={style.view1}>
                <Image source={require('./assets/images/pro_pic.png')} style={{width: 145, height: 145}}/>
            </View>
            <View style={style.view2}>
                <Text style={style.text1}>Firstname</Text>
                <Text style={style.text1}>Lastname</Text>
            </View>
            <View style={style.view4}>
                <View style={style.leftside}>
                    <Text style={style.text3}>เรทค่าจ้าง </Text>
                    <Text style={style.text3}>จำนวนเวลา </Text>
                    <Text style={style.text3}>จำนวนเงิน </Text>
                </View>
                <View style={style.rightside}>
                    <Text style={style.text3}>50 เครดิต/ชั่วโมง</Text>
                    <Text style={style.text3}>4 ชั่วโมง</Text>
                    <Text style={style.text3}>200 เครดิต</Text>
                </View>
            </View>
            <View style={style.view5}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.text_button}>ยืนยัน</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    body: {
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
        alignItems: 'center',
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        paddingBottom: 60,
    },
    view4: {
        flexDirection: 'row',
        padding: 10,
        paddingTop: 15,
    },
    view5: {
        paddingTop: 60,
        alignItems: 'center',
    },
    viewline: {
        padding: 5,
        marginBottom: 60,
    },
    button: {
        backgroundColor: '#00ff7f',
        width: '90%',
        height: 60,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        height: 0,
        borderWidth: 0.75,
    },
    leftside: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightside: {
        flexGrow: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 'auto',
    },
    text1: {
        color: '#000000',
        fontSize: 18,
        margin: 5,
        marginTop: 10,
    },
    text2_1: {
        color: '#000000',
        fontSize: 24,
        margin: 5,
    },
    text2_2: {
        color: '#000000',
        fontSize: 22,
        margin: 10,
    },
    text3: {
        color: '#000000',
        textAlign: 'center',
        margin: 5,
        fontSize: 24,
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