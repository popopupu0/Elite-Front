import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

const userlist = ([
    {profile_list: '1'},
    {profile_list: '2'},
    {profile_list: '3'},
    {profile_list: '4'},
]);

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

            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={userlist}
                renderItem={({ item }) => (
                    <View style={style.list}>
                        <View style={style.profile}>
                            <Image source={require('./assets/images/pro_pic.png')} resizeMode='contain' style={{ width: 80, height: 80,}}/>
                            <TouchableOpacity style={style.button1}>
                                <Text style={style.text_button1}>ข้อมูล</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.check}>
                            <Image source={require('./assets/images/vector.png')} resizeMode='contain' style={{ width: 65, height: 65, marginTop: 7}}/>
                                <TouchableOpacity style={style.button2}>
                                    <Text style={style.text_button2}>ตรวจงาน</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
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
    list: {
        flexDirection: 'row',
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        height: 140,
        margin: 15,
        borderRadius: 10,
    },
    profile: {
        padding: 10,
        paddingLeft: 30,
        alignItems: 'center',
    },
    button1: {
        backgroundColor: '#071952',
        width: '100%',
        height: 25,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    check: {
        padding: 10,
        paddingLeft: 35,
        alignItems: 'center',
    },
    button2: {
        backgroundColor: '#071952',
        width: '140%',
        height: 25,
        marginTop: 17,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
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
    text_button1: {
        color: '#ffffff',
        fontSize: 14,
    },
    text_button2: {
        color: '#ffffff',
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