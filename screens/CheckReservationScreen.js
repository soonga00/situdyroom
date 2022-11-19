import { View, Text, SafeAreaView, ScrollView, StyleSheet, Modal, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Color from '../colors/uosColors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

var my_id;
var name = '';
var ClassNum = '';
var PN = '';
var Warnning = '';
var reservationArr = ['2022-11-18', '09:00~12:00', 'STUDYROOM 1']

function CheckReservationScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    AsyncStorage.getItem('userID', (err, result) => {
        axios.post('http://172.20.10.2:3001/info', { // 내 예약가져오기
            inputID: result
        }).then(function (response) {
            name = response.data.name;
            ClassNum = response.data.st_num;
            PN = response.data.phone;
            Warnning = response.data.absence;
        }).catch(function (err) {
            console.log(err);
        });
    })

    const reserveCancel = () => {
        Alert.alert('예약취소')
        setModalVisible(false)

    }
    return (
        <SafeAreaView>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.horizontalCenteredM}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextStyle}>예약을 취소하시겠습니까?</Text>
                        <View style={styles.reserveStyle}>
                            <TouchableOpacity onPress={reserveCancel}>
                                <View style={styles.reserveButtonStyle}>
                                    <Text style={styles.durationTextStyle}>확 인</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <View style={styles.reserveButtonStyle}>
                                    <Text style={styles.durationTextStyle}>취 소</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </Modal>

            <KeyboardAwareScrollView>
                <View style={styles.horizontalCentered}>
                    <ScrollView>
                        <Text style={styles.titleStyle}>SITUDY ROOM</Text>
                        <Text style={styles.subTitleStyle}>내 정보</Text>
                        <View style={styles.infoView}>
                            <View style={styles.innerView}>
                                <Text style={styles.innerTextStyle}>이름       |   </Text>
                                <Text style={styles.innerVariableStyle}>{name}</Text>
                            </View>
                            <View style={styles.innerView}>
                                <Text style={styles.innerTextStyle}>학번       |   </Text>
                                <Text style={styles.innerVariableStyle}>{ClassNum}</Text>
                            </View>


                            <View style={styles.innerView}>
                                <Text style={styles.innerTextStyle}>전화번호 |   </Text>
                                <Text style={styles.innerVariableStyle}>{PN}</Text>
                            </View>


                            <View style={styles.innerView}>
                                <Text style={styles.innerTextStyle}>경고횟수 |   </Text>
                                <Text style={styles.innerVariableStyle}>{Warnning}</Text>
                            </View>
                        </View>
                        <Text style={styles.subTitleStyle}>내 예약</Text>
                        <View style={styles.infoView2}>
                            <Text
                                style={styles.reservationStyle}
                                onPress={() => { setModalVisible(true) }}
                            >{reservationArr[0]} {reservationArr[1]} {reservationArr[2]}</Text>
                        </View>
                    </ScrollView>

                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    horizontalCentered: {
        alignItems: 'center',

    },
    horizontalCenteredM: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    /* 제목 */
    titleStyle: {
        color: Color.blue,
        marginTop: 30,
        fontSize: 50,
        fontStyle: 'bold',
        textAlign: 'center',
    },
    /* 내 정보 & 내 예약 */
    subTitleStyle: {
        textAlign: 'center',
        marginTop: 30,
        fontStyle: 'bold',
        fontSize: 30,
        color: Color.gray,
    },
    infoView: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: Color.blueSoft,
        width: 320,
        height: 420,
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        textAlign: 'center',

    },
    infoView2: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: Color.blueSoft,
        width: 320,
        height: 380,
        marginTop: 20,
        paddingTop: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        textAlign: 'center',

    },
    innerView: {
        padding: 20,
        flexDirection: 'row'
    },
    innerTextStyle: {
        color: Color.blue,
        fontStyle: 'bold',
        fontSize: 27
    },
    innerVariableStyle: {
        color: Color.gray,
        fontSize: 27
    },
    reservationStyle: {
        color: Color.blueLight,
        fontSize: 18
    },
    modalView: {
        padding: 40,
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center'
    },
    modalTextStyle: {
        color: Color.blue,
        marginTop: 10,
        marginLeft: 5,
        fontSize: 20,
        fontStyle: 'bold'
    },
    modalTextInputStyle: {
        height: 40,
        width: 230,
        borderColor: Color.blueSoft,
        borderWidth: 2,
        borderRadius: 4,
        marginTop: 15,
        marginLeft: 5,
        marginBottom: 10,
        textAlign: 'left',
        fontSize: 20,
        padding: 10
    },
    durationStyle: {
        flexDirection: 'row',
    },
    durationTextStyle: {
        color: 'white',
        fontSize: 22
    },
    reserveStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    reserveButtonStyle: {
        backgroundColor: Color.blue,
        marginTop: 30,
        margin: 5,
        width: 100,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },


});

export default CheckReservationScreen;