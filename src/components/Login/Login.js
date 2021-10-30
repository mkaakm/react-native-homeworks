import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Button from "../../shared/Button/Button";
import ButtonBack from "../../shared/ButtonBack/ButtonBack";
import Input from "../../shared/Input/Input";

import {COLORS} from "../../color";

export default function Login({goBack}) {

    return (
        <View style={styles.containerLogin}>
            <ButtonBack text='Back' onPress={goBack}/>
            <View>
               <Text style={styles.textHeader}>Login</Text>
                <Input placeholder='Email' iconName ='email' placeholderTextColor={COLORS.primary} required/>
                <Input placeholder='Password' isSecure iconName ='lock' placeholderTextColor={COLORS.primary} required/>
                <Button style={styles.loginButton} text='Login'/>
                <Text style={styles.textLink}>Forget your password?</Text>
                <Text style={styles.text}>Dont have an account? <Text style={styles.textLink}>Sign up</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerLogin: {
        backgroundColor: '#000',
        justifyContent: 'center',
        height: '100%'
    },
    textHeader: {
        color: COLORS.secondary,
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 25,
    },
    text: {
        color: COLORS.primary,
        fontSize: 14,
        textAlign: 'center',
    },
    textLink: {
        color: COLORS.secondary,
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
        backgroundColor: COLORS.secondary,
        position: 'absolute',
        fontSize: 25,
        left: 60,
        top: 7
    },
    inputIconContainer: {
        color:COLORS.primary,
    },
});
