import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Button({text, style, onPress}) {

    return (
        <View style={[styles.backButton, style]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    backButton: {
        color: "red",
        borderColor: 'red',
        borderRadius: 15,
        backgroundColor: 'red',
        textAlign:'center',
        borderStyle:'solid',
        borderWidth: 1,
        display: 'flex',
        width: 50,
        paddingTop: 5,
        paddingBottom: 5,
        position:'absolute',
        top: 20,
        left: 10
    },
    buttonText:{
        textAlign:'center'
    }
});
