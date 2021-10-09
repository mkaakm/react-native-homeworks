import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Button({text, type = 'light', style, onPress}) {
    const className = type === 'light' ? styles.lightButton : styles.darkButton

    return (
        <View style={[className, style]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    lightButton: {
        color: "#000",
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: '#fff',
        textAlign:'center',
        borderStyle:'solid',
        borderWidth: 1,
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
    },
    darkButton:{
        color:'#fff',
        borderColor: 'red',
        borderRadius: 25,
        backgroundColor: 'red',
        textAlign:'center',
        borderStyle:'solid',
        borderWidth: 1,
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonText:{
        textAlign:'center',
    }
});
