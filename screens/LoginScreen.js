import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import Color from '../colors/uosColors';
import Main from './MainScreen';
import axios from 'axios';

function LoginScreen({ navigation }) {
    const [ID, setID] = useState('')
    const [PW, setPW] = useState('')

    const onPressLogin = () => {
        axios.post('http://localhost:3001/user', {
            firstName: 'ffffffffff',
            lastName: 'Flintstone'
        })
        .then(function (response) {
            // console.log(response.config.data,3);
            // console.log(response,4);
            // navigation.navigate('Main')
            console.log(response.config.data);
            console.log(response.config.data.lastName);
        })
        .catch(function (error) {
            console.error(error,6);
        });
        if (ID == '')
            Alert.alert("아이디가 올바르지 않습니다.")
        else if (PW == '')
            Alert.alert("비밀번호가 올바르지 않습니다.")
        navigation.navigate('Main')
    }
    const onPressFind = () => {
        navigation.navigate('Find ID')
    }
    return (
        <SafeAreaView>
            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
            <View style={styles.entryViewStyle}>
                <Text style={styles.entryTitleStyle}>아이디 (ID)</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={ID}
                    onChangeText={setID}
                    placeholder={''}
                    returnKeyType="done"
                />
                <Text style={styles.entryTitleStyle}>비밀번호 (PW)</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={PW}
                    onChangeText={setPW}
                    placeholder={''}
                    returnKeyType="done"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPressLogin}>
                <Button
                    onPress={onPressLogin}
                    title={'로 그 인'}
                    color={'white'}
                    fontSize={30}
                />
            </TouchableOpacity>
            <View style={styles.border}>
            </View>
            <View>
                <Text onPress={onPressFind} style={styles.findIDPW}>아이디 · 비밀번호 찾기</Text>
                <Text style={styles.forRegister}>시터디룸이 처음이라면?</Text>
            </View>
            <TouchableOpacity
                style={styles.registerButtonStyle}
                onPress={() => navigation.navigate('Register1')}
            >
                <Button
                    onPress={() => navigation.navigate('Register1')}
                    title={'회 원 가 입'}
                    color={'white'}
                    fontSize={30}
                />
            </TouchableOpacity>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    /* 제목 */
    titleStyle: {
        color: Color.blue,
        marginTop: 60,
        fontSize: 50,
        fontStyle: 'bold',
        alignContent: 'center',
        textAlign: 'center',
    },
    /* 입력창 */
    entryViewStyle: {
        marginTop: 40
    },
    entryTitleStyle: {
        color: Color.blue,
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontStyle: 'bold'
    },
    inputStyle: {
        height: 50,
        width: 360,
        borderColor: Color.blueSoft,
        borderWidth: 2,
        borderRadius: 4,
        marginTop: 15,
        marginLeft: 15,
        padding: 10,
        textAlign: 'left',
        fontSize: 20,
    },
    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginHorizontal: 100,
        width: 180,
        height: 50,
        backgroundColor: Color.blue,
        borderRadius: 5
    },
    /* 구분선 */
    border: {
        marginTop: 60,
        marginHorizontal: 20,
        width: 350,
        height: 2,
        backgroundColor: Color.graymist
    },

    findIDPW: {
        color: Color.gray,
        marginTop: 20,
        fontSize: 20,
        fontStyle: 'bold',
        alignContent: 'center',
        textAlign: 'center',
    },
    forRegister: {
        color: Color.gray,
        marginTop: 40,
        fontSize: 17,
        alignContent: 'center',
        textAlign: 'center',
    },
    registerButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 103,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: 180,
        height: 50,
        backgroundColor: Color.blue,
        borderRadius: 5
    }
});

export default LoginScreen;