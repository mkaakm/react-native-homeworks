import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from "../shared/Button/Button";

import {AntDesign} from '@expo/vector-icons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {COLORS} from "../../color";
export default function Start({setScreen}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Dark side of <Text style={styles.innerText}>Book store</Text></Text>
                <View style={styles.buttonContainer}>
                    <Button text='Login' onPress={() => setScreen('login')}/>
                    <Button text='SignUp' type='dark' onPress={() => setScreen('signUp')}/>
                </View>
                <Text style={styles.textMedia}>Social <Text style={styles.innerText}>media</Text></Text>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign name="facebook-square" style={styles.icon}/>
                <AntDesign name="linkedin-square" style={styles.icon}/>
                <MaterialCommunityIcons name="gmail" style={styles.icon}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 46,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 24,
        color: COLORS.secondary,
        marginRight: 5,
        marginLeft: 5,
    },
    text: {
        color: COLORS.primary,
        fontSize: 25,
        marginBottom: 26,
    },
    innerText: {
        color: COLORS.secondary,
    },
    textMedia: {
        color: COLORS.primary,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 25,
    }
});
