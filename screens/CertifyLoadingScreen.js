import { StyleSheet, Text, SafeAreaView, } from 'react-native'
import React from 'react'
import Color from '../colors/uosColors';
function CertifyLoadingScreen() {
    return (
        <SafeAreaView>
            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
            <Text style={styles.textStyle1}>학생증을 인증하는 데</Text>
            <Text style={styles.textStyle2}>약 3 ~ 4일 소요됩니다.</Text>
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
    textStyle1: {
        color: Color.gray,
        marginTop: 200,
        fontSize: 30,
        fontStyle: 'bold',
        alignContent: 'center',
        textAlign: 'center',
    },
    textStyle2: {
        color: Color.gray,
        marginTop: 10,
        fontSize: 30,
        fontStyle: 'bold',
        alignContent: 'center',
        textAlign: 'center',
    },


});

export default CertifyLoadingScreen;