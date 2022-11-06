import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Button, TextInput } from 'react-native';
import Color from '../colors/uosColors';
import InfoEntry from "../components/infoEntry";

function LoginScreen({ navigation }) {
    const [ID, onEndEditingID] = useState('')
    const [PW, onEndEditingPW] = useState('')

    const onPressNext = () => {
        onEndEditingID('');
        onEndEditingPW('');
    }
    const onPressFind = () => {
    }
    return (
        <SafeAreaView>
            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
            <View style={styles.entryViewStyle}>
                <Text style={styles.entryTitleStyle}>아이디 (ID)</Text>
                <InfoEntry
                    variable={ID}
                    content={''}
                />
                <Text style={styles.entryTitleStyle}>비밀번호 (PW)</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={PW}
                    placeholder={''}
                    returnKeyType="done"
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    onPress={onPressNext}
                    title={'로 그 인'}
                    color={'white'}
                    fontSize={30}
                />
            </View>
            <View style={styles.border}>
            </View>
            <View>
                <Text onPress={onPressFind} style={styles.findIDPW}>아이디 · 비밀번호 찾기</Text>
                <Text style={styles.forRegister}>시터디룸이 처음이라면?</Text>
            </View>
            <View style={styles.registerButtonStyle}>
                <Button
                    onPress={() => navigation.navigate('Register1')}
                    title={'회 원 가 입'}
                    color={'white'}
                    fontSize={30}
                />
            </View>
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
        fontSize: 18,
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