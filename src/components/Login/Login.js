import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Button from "../shared/Button";
import ButtonBack from "../shared/ButtonBack";
import Input from "../shared/Input";

export default function Login({goBack}) {

    return (
        <View style={styles.containerLogin}>
            <ButtonBack text='Back' onPress={goBack}/>
            <View>
                <Text style={styles.textHeader}>Login</Text>
                <Input placeholder='Email' iconName='email' placeholderTextColor='#fff' required/>
                <Input placeholder='Password' iconName='lock' isSecure placeholderTextColor='#fff' required/>
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
});
