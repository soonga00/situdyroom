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
            <View style={styles.horizontalCentered}>
                <Text style={styles.titleStyle}>SITUDY ROOM</Text>
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
    horizontalCentered: {
        alignItems: 'center'
    },
    /* 제목 */
    titleStyle: {
        color: Color.blue,
        marginTop: 60,
        fontSize: 50,
        fontStyle: 'bold',
    },
    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 110,
        width: 250,
        height: 100,
        backgroundColor: Color.blue,
        borderRadius: 5,
    },
    textStyle: {
        fontSize: 27,
        color: 'white'
    }
});

export default ResevationMainScreen;