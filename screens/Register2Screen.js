import { SafeAreaView, Text, StyleSheet, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import Color from '../colors/uosColors';

function Register2Screen({ navigation }) {
    const [ID, setID] = useState('')
    const [PW, setPW] = useState('')
    const [PW2, setPW2] = useState('')

    const onPressNext = () => {
        if (ID == '')
            Alert.alert("아이디가 올바르지 않습니다.")
        else if (PW == '')
            Alert.alert("비밀번호가 올바르지 않습니다.")
        else if (PW != PW2)
            Alert.alert("비밀번호를 다시 확인하세요")
        else
            navigation.navigate('Register3')


    }
    return (
        <SafeAreaView>
            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
            <View style={styles.entryViewStyle}>
                <Text style={styles.entryTitleStyle}>아이디</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={ID}
                    onChangeText={setID}
                    placeholder={'아이디를 입력해주세요'}
                    returnKeyType="done"
                />
                <Text style={styles.entryTitleStyle}>비밀번호</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={PW}
                    onChangeText={setPW}
                    placeholder={'비밀번호를 입력해주세요'}
                    secureTextEntry
                    maxLength={20}
                    returnKeyType="done"
                />
                <Text style={styles.entryTitleStyle}>비밀번호 확인</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={PW2}
                    onChangeText={setPW2}
                    placeholder={'비밀번호를 다시 입력해주세요'}
                    secureTextEntry
                    maxLength={20}
                    returnKeyType="done"
                />
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

    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginHorizontal: 105,
        width: 180,
        height: 50,
        backgroundColor: Color.blue,
        borderRadius: 5
    }
});

export default Register2Screen;