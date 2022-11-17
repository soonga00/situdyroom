import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Color from '../colors/uosColors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function LoginScreen({ navigation }) {
    const [ID, setID] = useState('')
    const [PW, setPW] = useState('')

    const onPressLogin = () => {
        if (ID == '')
            Alert.alert("아이디가 올바르지 않습니다.")
        else if (PW == '')
            Alert.alert("비밀번호가 올바르지 않습니다.")
        else {
            navigation.navigate('Main')
        }
    }
    const onPressFind = () => {
        navigation.navigate('Find ID')
    }
    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={styles.horizontalCentered}>
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
                        <Text style={styles.buttonTextStyle}>로 그 인</Text>
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
                        <Text style={styles.buttonTextStyle}>회 원 가 입</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    horizontalCentered: {
        alignItems: 'center'
    },
    titleStyle: {
        color: Color.blue,
        marginTop: 60,
        fontSize: 50,
        fontStyle: 'bold',
    },
    /* 입력창 */
    entryViewStyle: {
        marginTop: 40
    },
    entryTitleStyle: {
        color: Color.blue,
        marginTop: 20,
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
        padding: 10,
        textAlign: 'left',
        fontSize: 20,
    },
    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        width: 180,
        height: 50,
        backgroundColor: Color.blue,
        borderRadius: 5
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 20
    },
    /* 구분선 */
    border: {
        marginTop: 60,
        width: 350,
        height: 2,
        backgroundColor: Color.graymist
    },
    findIDPW: {
        color: Color.gray,
        marginTop: 20,
        fontSize: 20,
        fontStyle: 'bold',
    },
    forRegister: {
        color: Color.gray,
        marginTop: 40,
        fontSize: 17,
    },
    registerButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 180,
        height: 50,
        backgroundColor: Color.blue,
        borderRadius: 5
    }
});

export default LoginScreen;