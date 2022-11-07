import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import Color from '../colors/uosColors';

function FindIDScreen({ navigation }) {
    const [name, setName] = useState('')
    const [classNum, setClassNum] = useState(0)
    const [phoneNum, setPhoneNum] = useState(0)
    const [certifyNum, setCertifyNum] = useState(0)

    const onPressSend = () => {
        if (name == '')
            Alert.alert("이름이 올바르지 않습니다.")
        else if (classNum < 10)
            Alert.alert("학번이 올바르지 않습니다.")
        else if (phoneNum < 11)
            Alert.alert("전화번호가 올바르지 않습니다.")
        /*위 세 항목이 일치하는 데이터 베이스가 있는지 확인하고 있다면 문자 보내기
            문자 보낸후, 3분 타이머 칸에 띄우기
         */
    }
    const onPressCheck = () => {
        navigation.navigate('Find PW')
    }
    const onPressPW = () => {
        navigation.navigate('Find PW')
    }
    return (
        <SafeAreaView>
            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
            <View style={styles.entryViewStyle}>
                <Text style={styles.IDStyle}>아이디 찾기</Text>
                <Text style={styles.entryTitleStyle}>이름</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={name}
                    onChangeText={setName}
                    placeholder={'홍길동'}
                    returnKeyType="done"
                />
                <Text style={styles.entryTitleStyle}>학번</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={classNum}
                    onChangeText={setClassNum}
                    placeholder={'2022000000'}
                    keyboardType="number-pad"
                    maxLength={10}
                    returnKeyType="done"
                />
                <Text style={styles.entryTitleStyle}>전화번호</Text>
                <View style={styles.pwViewStyle}>
                    <TextInput
                        style={styles.pwInputStyle}
                        value={phoneNum}
                        onChangeText={setPhoneNum}
                        placeholder={'010-0000-0000'}
                        keyboardType="number-pad"
                        maxLength={11}
                        returnKeyType="done"
                    />
                    <TouchableOpacity style={styles.pwButtonStyle} onPress={onPressSend}>
                        <Button
                            onPress={onPressSend}
                            title={'전 송'}
                            color={'white'}
                            fontSize={30}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.entryTitleStyle}>인증번호</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={certifyNum}
                    onChangeText={setCertifyNum}
                    placeholder={'인증번호를 입력해주세요.'}
                    keyboardType="number-pad"
                    maxLength={4}
                    returnKeyType="done"
                />
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPressCheck}>
                <Button
                    onPress={onPressCheck}
                    title={'확 인'}
                    color={'white'}
                    fontSize={30}
                />
            </TouchableOpacity>
            <View style={styles.border}>
            </View>
            <Text
                style={styles.findPW}
                onPress={onPressPW}
            >비밀번호 찾기</Text>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    /* 제목 */
    titleStyle: {
        color: Color.blue,
        marginTop: 20,
        fontSize: 50,
        fontStyle: 'bold',
        alignContent: 'center',
        textAlign: 'center',
    },
    /* 아이디 찾기 */
    IDStyle: {
        alignContent: 'center',
        textAlign: 'center',
        fontStyle: 'bold',
        fontSize: 30,
        color: Color.gray,
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
    pwInputStyle: {
        height: 50,
        width: 240,
        borderColor: Color.blueSoft,
        borderWidth: 2,
        borderRadius: 4,
        marginTop: 15,
        marginLeft: 15,
        padding: 10,
        textAlign: 'left',
        fontSize: 20,
    },
    pwViewStyle: {
        flexDirection: 'row',
    },
    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 100,
        width: 180,
        height: 50,
        backgroundColor: Color.blue,
        borderRadius: 5
    },
    pwButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginHorizontal: 20,
        width: 100,
        height: 50,
        backgroundColor: Color.blue,
        borderRadius: 5
    },
    /* 구분선 */
    border: {
        marginTop: 30,
        marginHorizontal: 20,
        width: 350,
        height: 2,
        backgroundColor: Color.graymist
    },

    findPW: {
        color: Color.gray,
        marginTop: 20,
        fontSize: 20,
        fontStyle: 'bold',
        alignContent: 'center',
        textAlign: 'center',
    },

});

export default FindIDScreen;