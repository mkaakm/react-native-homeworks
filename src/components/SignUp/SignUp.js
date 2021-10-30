import React, {useState} from 'react';
import {StyleSheet, Text, View, CheckBox} from 'react-native';

import Button from "../../shared/Button";
import Input from "../../shared/Input";
import ButtonBack from "../../shared/ButtonBack";

import {COLORS} from "../../color";

export default function SignUp({goBack}) {
    const [agree, setAgree] = useState(false);

    return (
        <View style={styles.container}>
            <ButtonBack onPress={goBack}/>
            <Text style={styles.textHeader}>Sign up</Text>
                <Input placeholder='Your name' iconName ='user' placeholderTextColor={COLORS.primary} required/>
                <Input placeholder='Email' iconName ='email' placeholderTextColor={COLORS.primary} required/>
                <Input placeholder='Phone' iconName ='phone' placeholderTextColor={COLORS.primary} required/>
                <Input placeholder='Password' isSecure iconName ='lock' placeholderTextColor={COLORS.primary} required/>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agree}
                    onValueChange={setAgree}
                    style={styles.checkbox}
                />
                <Text style={styles.textLink}>Yes ! Agree all Terms and Conditions</Text>
            </View>
            <Button style={styles.signUpButton} text='Sign up'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
    inputIcon: {
        backgroundColor: COLORS.secondary,
        position: 'absolute',
        fontSize: 25,
        left: 60,
        top: 7
    },
    inputIconContainer: {
        backgroundColor: 'transparent',
        color: COLORS.primary,
    },
    checkbox: {
        marginRight: 20,
        backgroundColor: COLORS.primary,

    },
    checkboxContainer: {
        color: COLORS.primary,
        width: "80%",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textLink: {
        color: COLORS.secondary,
        fontSize: 14,
    },
    signUpButton: {
        minWidth: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 30,
    }
});
