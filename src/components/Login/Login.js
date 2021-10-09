import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Button from "../shared/Button/Button";
import ButtonBack from "../shared/ButtonBack/ButtonBack";
import Input from "../shared/Input/Input";
import SecureInput from "../shared/SecureInput/SecureInput";

import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Login({goBack}) {

    return (
        <View style={styles.containerLogin}>
            <ButtonBack text='Back' onPress={goBack}/>
            <View>
                <Text style={styles.textHeader}>Login</Text>
                <View style={styles.inputIconContainer}>
                    <MaterialCommunityIcons name="email" style={styles.inputIcon}/>
                    <Input placeholder='Email' placeholderTextColor='#fff' required/>
                </View>
                <View style={styles.inputIconContainer}>
                    <Feather name="lock" style={styles.inputIcon}/>
                    <SecureInput placeholder='Password' placeholderTextColor='#fff' required/>
                </View>
                <Button style={styles.loginButton} text='Login'/>
                <Text style={styles.textLink}>Forget your password?</Text>
                <Text style={styles.text}>Dont have an account? <Text style={styles.textLink}>Sign up</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerLogin: {
        backgroundColor: '#000',
        justifyContent: 'center',
        height: '100%'
    },
    textHeader: {
        color: 'red',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 25,
    },
    text: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    textLink: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
    },
    loginButton: {
        minWidth: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 30,
    },
    inputIcon: {
        backgroundColor: 'red',
        position: 'absolute',
        fontSize: 25,
        left: 60,
        top: 7
    },
    inputIconContainer: {
        color:'#fff',

    },
});
