import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Color from '../colors/uosColors';
function MainScreen({ navigation }) {

    const onPressReserv = () => {
        navigation.navigate('Four Reservation')
    }
    const onPressCheckReserv = () => {

    }
    const onPressEnter = () => {

    }
    const onPressBoard = () => {

    }

    return (
        <SafeAreaView>
            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPressReserv}>
                <Button
                    onPress={onPressReserv}
                    title={'예 약 하 기'}
                    color={'white'}
                    fontSize={30}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPressCheckReserv}>
                <Button
                    onPress={onPressCheckReserv}
                    title={'예 약 확 인'}
                    color={'white'}
                    fontSize={30}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPressEnter}>
                <Button
                    onPress={onPressEnter}
                    title={'입 실 신 청'}
                    color={'white'}
                    fontSize={30}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={onPressBoard}>
                <Button
                    onPress={onPressBoard}
                    title={'게 시 판'}
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
    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginHorizontal: 100,
        width: 180,
        height: 50,
        backgroundColor: Color.blue,
        borderRadius: 5
    },
});

export default MainScreen;