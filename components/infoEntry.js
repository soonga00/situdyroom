import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../colors/uosColors';

function infoInput(variable, content) {

    return (
        <View>
            <TextInput
                style={styles.inputStyle}
                value={variable.value}
                placeholder={content.value}
                returnKeyType="done"
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }

});

export default infoInput;