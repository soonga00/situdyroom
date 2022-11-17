import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../colors/uosColors';

function ResevationMainScreen({ navigation }) {

    const onPressFour = () => {
        navigation.navigate('Four Reservation')
    }
    const onPressSix = () => {
        navigation.navigate('Six Reservation')
    }

    return (
        <SafeAreaView>

            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
            <View style={styles.buttonWrapperStyle} >
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressFour}>
                    <Text style={styles.textStyle}>STUDY ROOM 1</Text>
                    <Text style={styles.textStyle}>4 인 실</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressSix}>
                    <Text style={styles.textStyle}>STUDY ROOM 2</Text>
                    <Text style={styles.textStyle}>6 인 실</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    /* 제목 */
    titleStyle: {
        color: Color.blue,
        marginTop: 30,
        fontSize: 50,
        fontStyle: 'bold',
        alignContent: 'center',
        textAlign: 'center',
    },
    buttonWrapperStyle: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 230,
        height: 80,
        marginTop: 60,
        backgroundColor: Color.blue,
        borderRadius: 5,


    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    }
});

export default ResevationMainScreen;