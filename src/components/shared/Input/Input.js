import React, {useState} from "react";
import {StyleSheet,TextInput, View, Text} from 'react-native';

import {COLORS} from "../../../color";

export default function Input({placeholder, keyboardType, value, placeholderTextColor, required=false}) {
    const [text, setText] = useState(null)
    const endEdit = (e) => setText(e.nativeEvent.text)
    const error = (text === '' && required) ? <Text style={styles.text}>Field is required</Text> : null
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                value={value}
                onEndEditing={endEdit}
            />
            {error}
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        padding: 10,
        color: COLORS.primary,
        borderColor: COLORS.secondary,
        borderRadius: 25,
        backgroundColor: 'transparent',
        borderStyle:'solid',
        borderWidth: 1,
        paddingLeft: 50,
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 25,
        width: '80%',
        shadowColor:COLORS.secondary,
        shadowOffset:{
            width: 2,
            height: 2
        },
        shadowOpacity:0.9,
        shadowRadius:20,
        elevation:10,
    },
    text:{
        fontSize: 14,
        color: COLORS.secondary,
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        position:'relative',
        top: -15
    }
});
