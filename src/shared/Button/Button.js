import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from "../../color";

export default function Button({text, type = 'light', style, onPress}) {
    // const className = (type === 'light') ? styles.lightButton : styles.darkButton

    return (
        <View style={styles.lightButton}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    lightButton: {
        color: "#000",
        borderColor: COLORS.primary,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
        textAlign:'center',
        borderStyle:'solid',
        borderWidth: 1,
        width: 100,
        paddingVertical:10
    },
    darkButton:{
        color:COLORS.primary,
        borderColor: COLORS.secondary,
        borderRadius: 25,
        backgroundColor: COLORS.secondary,
        textAlign:'center',
        borderStyle:'solid',
        borderWidth: 1,
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonText:{
        textAlign:'center',
    },

});
