import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Color from '../colors/uosColors';

function ResevationMainScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={styles.titleStyle}>SITUDY ROOM</Text>
                <View>
                    <View></View>
                </View>
            </ScrollView>
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

export default ResevationMainScreen;