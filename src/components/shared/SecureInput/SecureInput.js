import React, {useState} from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {Feather} from "@expo/vector-icons";

import {COLORS} from "../../../color";

export default function SecureInput({placeholder, keyboardType, value, placeholderTextColor, required=false}) {
    const [secure, setSecure] = useState(true)
    const [text, setText] = useState(null)
    const endEdit = (e) => setText(e.nativeEvent.text)
    const error = (text === '' && required) ? <Text style={styles.text}>Field is required</Text> : null
    const switchSecure = () => {
        setSecure(prevState => !prevState)
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                value={value}
                secureTextEntry={secure}
                onEndEditing={endEdit}
            />
            {error}
            {secure?<Feather name="eye" style={styles.icon} onPress={switchSecure}/>:
                <Feather name="eye-off" style={styles.icon} onPress={switchSecure}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    },
    icon:{
        color:COLORS.secondary,
        position: 'absolute',
        right: '15%',
        top: 7,
        fontSize: 25
    },
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
        shadowRadius:20.00,
        elevation:10,
    },
    text:{
        fontSize: 14,
        color: COLORS.secondary,
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        position:'absolute',
        bottom: 5
    }
});
