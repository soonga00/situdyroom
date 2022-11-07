import { SafeAreaView, Text, StyleSheet, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import React, { useState } from "react";
import Color from '../colors/uosColors';

function Register1Screen(navigation) {
    const [name, setName] = useState('')
    const [classNum, setClassNum] = useState(0)
    const [phoneNum, setPhoneNum] = useState(0)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onPressNext = () => {
        if (name == '')
            Alert.alert("이름이 올바르지 않습니다.")
        else if (classNum.length != 10)
            Alert.alert("학번이 올바르지 않습니다.")
        else if (phoneNum.length != 11)
            Alert.alert("전화번호가 올바르지 않습니다.")
        else if (toggleCheckBox == false)
            Alert.alert("개인정보 수집, 이용 동의를 눌러주세요.")
        else
            navigation.navigation.navigate('Register2')

    }
    return (
        <SafeAreaView>
            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
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
                <TextInput
                    style={styles.inputStyle}
                    value={phoneNum}
                    onChangeText={setPhoneNum}
                    placeholder={'010-0000-0000'}
                    keyboardType="number-pad"
                    maxLength={11}
                    returnKeyType="done"
                />
            </View>

            <View style={styles.checkViewStyle}>
                <CheckBox
                    color={Color.blue}
                    disabled={false}
                    style={styles.checkBoxStyle}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={styles.checkTextStyle}>개인 정보 수집, 이용 동의 (필수)</Text>
            </View>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={onPressNext}
            >
                <Button
                    onPress={onPressNext}
                    title={'확  인'}
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
    /* 체크박스 */
    checkViewStyle: {
        flexDirection: 'row',
        marginTop: 25,
    },
    checkBoxStyle: {
        marginLeft: 20,
    },
    checkTextStyle: {
        color: Color.gray,
        marginTop: 2,
        marginLeft: 17,
        fontSize: 18,
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
    }
});

export default Register1Screen;