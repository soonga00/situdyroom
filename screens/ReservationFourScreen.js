import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Alert, Modal, TextInput } from 'react-native'
import React from 'react'
import { Table, Row, Col, TableWrapper, Cell } from 'react-native-table-component'
import Color from '../colors/uosColors';
import { useState } from 'react';


function ReservationFourScreen({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false)
    const [classNum1, setClassNum1] = useState(0)
    const [classNum2, setClassNum2] = useState(0)
    const [classNum3, setClassNum3] = useState(0)
    const [classNum4, setClassNum4] = useState(0)
    const [duration, setDuration] = useState(0)
    const [RowNum, setRow] = useState(0)
    const [ColNum, setCol] = useState(0)

    const cellPossible = (rowNum, colNum) => (
        < TouchableOpacity onPress={() => { setModalVisible(true), setDuration(0), setRow(rowNum), setCol(colNum) }}>
            <View style={styles.reservationPossible}>
                <Text>      </Text>
            </View>
        </TouchableOpacity >
    )
    const reserve = () => {
        if (classNum1.length != 10)
            Alert.alert("4인실 최소 예약 인원은\n 2명 입니다.\n 학번을 다시 입력하세요")
        else if (classNum2.length != 10)
            Alert.alert("4인실 최소 예약 인원은 2명 입니다.\n 학번을 다시 입력하세요")
        else if (duration == 0)
            Alert.alert("시간을 선택하세요")
        else {
            Alert.alert("예약이 완료되었습니다\n 학번\n" + classNum1 + "\n" + classNum2 + "\n" + classNum3 + "\n" + classNum4 + "\n시간\n" + duration + "\n" + RowNum + "행" + ColNum + "열")
            setModalVisible(false)
            navigation.navigate('Main')
        }

    }


    let today = new Date();
    let newDay = new Date(today);
    let m = newDay.getMonth() + 1;
    let d = newDay.getDate();
    const day1 = m + '/' + d
    newDay.setDate(today.getDate() + 1);
    m = newDay.getMonth() + 1;
    d = newDay.getDate();
    const day2 = m + '/' + d
    newDay.setDate(today.getDate() + 2);
    m = newDay.getMonth() + 1;
    d = newDay.getDate();
    const day3 = m + '/' + d
    newDay.setDate(today.getDate() + 3);
    m = newDay.getMonth() + 1;
    d = newDay.getDate();
    const day4 = m + '/' + d
    newDay.setDate(today.getDate() + 4);
    m = newDay.getMonth() + 1;
    d = newDay.getDate();
    const day5 = m + '/' + d
    newDay.setDate(today.getDate() + 5);
    m = newDay.getMonth() + 1;
    d = newDay.getDate();
    const day6 = m + '/' + d
    newDay.setDate(today.getDate() + 6);
    m = newDay.getMonth() + 1;
    d = newDay.getDate();
    const day7 = m + '/' + d

    const tableDay = ['시간', day1, day2, day3, day4, day5, day6, day7];
    const tableTime = [
        '09:00~09:30', '09:30~10:00',
        '10:00~10:30', '10:30~11:00',
        '11:00~11:30', '11:30~12:00',
        '12:00~12:30', '12:30~13:00',
        '13:00~13:30', '13:30~14:00',
        '14:00~14:30', '14:30~15:00',
        '15:00~15:30', '15:30~16:00',
        '16:00~16:30', '16:30~17:00',
        '17:00~17:30', '17:30~18:00',
        '18:00~18:30', '18:30~19:00',
        '19:00~19:30', '19:30~20:00',
        '20:00~20:30', '20:30~21:00',
        '21:00~21:30', '21:30~22:00'
    ]
    const tableData = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];

    return (

        <SafeAreaView>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextStyle}>학번</Text>
                        <TextInput
                            style={styles.modalTextInputStyle}
                            value={classNum1}
                            onChangeText={setClassNum1}
                            placeholder={''}
                            keyboardType="number-pad"
                            maxLength={10}
                            returnKeyType="done"
                        />
                        <TextInput
                            style={styles.modalTextInputStyle}
                            value={classNum2}
                            onChangeText={setClassNum2}
                            placeholder={''}
                            keyboardType="number-pad"
                            maxLength={10}
                            returnKeyType="done"
                        />
                        <TextInput
                            style={styles.modalTextInputStyle}
                            value={classNum3}
                            onChangeText={setClassNum3}
                            placeholder={''}
                            keyboardType="number-pad"
                            maxLength={10}
                            returnKeyType="done"
                        />
                        <TextInput
                            style={styles.modalTextInputStyle}
                            value={classNum4}
                            onChangeText={setClassNum4}
                            placeholder={''}
                            keyboardType="number-pad"
                            maxLength={10}
                            returnKeyType="done"
                        />
                        <Text style={styles.modalTextStyle}>사용 시간</Text>
                        <View style={styles.durationStyle}>
                            <TouchableOpacity onPress={() => setDuration(1)}>
                                <View style={styles.durationCheckStyle}>
                                    <Text style={styles.durationTextStyle}>0.5h</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setDuration(2)}>
                                <View style={styles.durationCheckStyle}>
                                    <Text style={styles.durationTextStyle}>1h</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setDuration(3)}>
                                <View style={styles.durationCheckStyle}>
                                    <Text style={styles.durationTextStyle}>1.5h</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.durationStyle}>

                            <TouchableOpacity onPress={() => setDuration(4)}>
                                <View style={styles.durationCheckStyle}>
                                    <Text style={styles.durationTextStyle}>2h</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setDuration(5)}>
                                <View style={styles.durationCheckStyle}>
                                    <Text style={styles.durationTextStyle}>2.5h</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setDuration(6)}>
                                <View style={styles.durationCheckStyle}>
                                    <Text style={styles.durationTextStyle}>3h</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.reserveStyle}>
                            <TouchableOpacity onPress={() => { reserve() }}>
                                <View style={styles.reserveButtonStyle}>
                                    <Text style={styles.durationTextStyle}>예 약</Text>
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
            <Text style={styles.titleStyle}>SITUDY ROOM</Text>
            <ScrollView>
                <View style={styles.tableStyle}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: Color.blue }}>
                        <Row data={tableDay}
                            widthArr={[78, 40, 40, 40, 40, 40, 40, 40]}
                            style={styles.rowStyle}
                            textStyle={styles.tableTextStyle} />
                        <TableWrapper
                            style={styles.tableWrapperStyle}
                        >
                            <Col data={tableTime}
                                width={78}
                                heightArr={[40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]}
                                textStyle={styles.tableTextStyle}
                                style={styles.colStyle}
                            />
                            {
                                tableData.map((rowData, index) => (
                                    <TableWrapper key={index} style={styles.timeStyle} >
                                        {
                                            rowData.map((cellData, cellIndex) => (
                                                <Cell key={cellIndex} data={index == 1 ? cellPossible(cellIndex, index) : cellData} />

                                            ))
                                        }
                                    </TableWrapper>
                                ))
                            }

                        </TableWrapper>
                    </Table>
                </View>
            </ScrollView >
        </SafeAreaView >
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
    tableStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingTop: 30,
        paddingBottom: 70,
    },
    tableWrapperStyle: {
        flexDirection: 'row',
    },
    rowStyle: {
        height: 30,
        backgroundColor: Color.blueLight
    },
    colStyle: {
        backgroundColor: Color.blueSoft
    },
    tableTextStyle: {
        textAlign: 'center'
    },
    reservationPossible: {
        backgroundColor: Color.emerald,
        width: 38,
        height: 38
    },
    reservationImpossible: {
        backgroundColor: Color.gray,
        width: 10
    },
    timeStyle: {
        width: 40
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        padding: 40,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
    durationCheckStyle: {
        backgroundColor: Color.gray,
        marginTop: 10,
        marginLeft: 5,
        width: 70,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    durationTextStyle: {
        color: Color.graymist,
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
    reserveTextStyle: {
        color: 'white',
        fontSize: 30
    }
});

export default ReservationFourScreen;