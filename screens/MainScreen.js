import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Button, View } from 'react-native'
import React from 'react'
import Color from '../colors/uosColors';
function MainScreen({ navigation }) {

    const onPressReserv = () => {
        navigation.navigate('Main Reservation')
    }
    const onPressCheckReserv = () => {

    }
    const onPressEnter = () => {

    }

    return (
        <SafeAreaView>
            <View style={styles.horizontalCentered}>
                <Text style={styles.titleStyle}>SITUDY ROOM</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressReserv}>
                    <Text style={styles.buttonTextStyle}>예 약 하 기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressCheckReserv}>
                    <Text style={styles.buttonTextStyle}>예 약 확 인</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.enterView}>
                <TouchableOpacity style={styles.button2Style} onPress={onPressEnter}>
                    <Text style={styles.buttonText2Style}>입 실</Text>
                    <Text style={styles.buttonText2Style}> </Text>
                    <Text style={styles.buttonText2Style}>신 청</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    horizontalCentered: {
        alignItems: 'center'
    },
    enterView: {
        marginTop: 40,
        marginLeft: 280,

    },
    /* 제목 */
    titleStyle: {
        color: Color.blue,
        marginTop: 60,
        marginBottom: 20,
        fontSize: 50,
        fontStyle: 'bold',
    },
    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90,
        width: 250,
        height: 100,
        backgroundColor: Color.blue,
        borderRadius: 5
    },
    button2Style: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        width: 80,
        height: 80,
        backgroundColor: Color.blueLight,
        borderRadius: 80
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 27
    },
    buttonText2Style: {
        color: 'white',
        fontSize: 15
    },
});

export default MainScreen;