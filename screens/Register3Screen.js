import {
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    View,
    ActionSheetIOS,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import React from 'react'
import Color from '../colors/uosColors';
import { useState } from 'react';






function Register3Screen({ navigation }) {

    const [imageUrl, setImageUrl] = useState('');


    const onLaunchCamera = async () => {
        const status = ImagePicker.requestCameraPermissionsAsync();
        if (status.granted === false) {
            alert('카메라 접근 허용이 필요합니다')
        } else {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,

            });
            if (result.cancelled) {
                return null;
            }
            console.log(result);
            setImageUrl(result.uri);
            navigation.navigate('Certify Loading')
        }
    };

    const onLaunchImageLibrary = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });
        if (result.cancelled) {
            return null;
        }
        console.log(result);
        setImageUrl(result.uri);
        navigation.navigate('Certify Loading')
    };
    const onPress = () => {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                title: '사진 업로드',
                options: ['카메라로 촬영하기', '사진 선택하기', '취소'],
                cancelButtonIndex: 2,
            },
            (buttonIndex) => {
                if (buttonIndex === 0) {
                    onLaunchCamera();
                } else if (buttonIndex === 1) {
                    onLaunchImageLibrary();
                }
            },
        );
    };

    return (
        <SafeAreaView>
            <View style={styles.titleStyle}>
                <Text style={styles.titleStyle}>SITUDY ROOM</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onPress}
                >
                    <Text style={styles.textStyle}>학생증 등록하기</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    horizontalCentered: {
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

    /* 버튼 */
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 220,
        marginHorizontal: 105,
        width: 180,
        height: 60,
        backgroundColor: Color.blue,
        borderRadius: 5
    },
    textStyle: {
        fontSize: 18,
        color: 'white'
    },
});

export default Register3Screen;