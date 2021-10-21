import React, {useState} from 'react';
import {StyleSheet, Text, View, CheckBox} from 'react-native';

import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";
import ButtonBack from "../shared/ButtonBack/ButtonBack";
import SecureInput from "../shared/SecureInput/SecureInput";


import {Feather} from '@expo/vector-icons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {COLORS} from "../../color";
export default function SignUp({goBack}) {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <ButtonBack text='Back' onPress={goBack}/>
            <Text style={styles.textHeader}>Sign up</Text>
            <View style={styles.inputIconContainer}>
                <Feather name="user" style={styles.inputIcon}/>
                <Input placeholder='Your name' placeholderTextColor='#fff' required/>
            </View>
            <View style={styles.inputIconContainer}>
                <MaterialCommunityIcons name="email" style={styles.inputIcon} />
                <Input placeholder='Email' placeholderTextColor='#fff' required/>
            </View>
            <View style={styles.inputIconContainer}>
                <MaterialCommunityIcons name="phone" style={styles.inputIcon} />
                <Input placeholder='Phone' placeholderTextColor='#fff' required/>
            </View>
            <View style={styles.inputIconContainer}>
                <Feather name="lock" style={styles.inputIcon}/>
                <SecureInput placeholder='Password' placeholderTextColor='#fff' required/>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.textLink}>Yes ! Agree all Tearms & Condition</Text>
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
