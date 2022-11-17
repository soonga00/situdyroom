import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Color from '../colors/uosColors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function FindIDScreen({ navigation }) {
    const [name, setName] = useState('')
    const [classNum, setClassNum] = useState(0)
    const [phoneNum, setPhoneNum] = useState(0)
    const [certifyNum, setCertifyNum] = useState('')

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
        if (certifyNum == '')
            Alert.alert("인증번호가 올바르지 않습니다.\n다시 입력하세요.")
        else if (certifyNum == '0724')
            Alert.alert("이건 수아 생일!")
        else if (certifyNum == '0317')
            Alert.alert("이건 영규 생일!")
        else if (certifyNum == '0315')
            Alert.alert("이건 도현 생일!")
        else
            Alert.alert("틀렸습니다.")
    }
    const onPressPW = () => {
        navigation.navigate('Find PW')
    }
    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={styles.horizontalCentered}>
                    <Text style={styles.titleStyle}>SITUDY ROOM</Text>
                    <Text style={styles.IDStyle}>아이디 찾기</Text>
                    <View style={styles.entryViewStyle}>
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
                        <View style={styles.pnViewStyle}>
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
                                <Text style={styles.textStyle}>전 송</Text>
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
                        <Text style={styles.textStyle}>확 인</Text>
                    </TouchableOpacity>
                    <View style={styles.border}>
                    </View>
                    <Text
                        style={styles.findPW}
                        onPress={onPressPW}
                    >비밀번호 찾기</Text>
                </View>
            </KeyboardAwareScrollView>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    horizontalCentered: {
        alignItems: 'center'
    },
    /* 제목 */
    titleStyle: {
        color: Color.blue,
        marginTop: 30,
        fontSize: 50,
        fontStyle: 'bold',
    },
    /* 아이디 찾기 */
    IDStyle: {
        marginTop: 30,
        fontStyle: 'bold',
        fontSize: 30,
        color: Color.gray,
    },
    /* 입력창 */
    entryViewStyle: {
        alignContent: 'center',
        marginTop: 10
    },
    entryTitleStyle: {
        color: Color.blue,
        marginLeft: 20,
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
    pnViewStyle: {
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
    textStyle: {
        fontSize: 18,
        color: 'white'
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