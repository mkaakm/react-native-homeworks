import React, {useState} from 'react';

import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Start from "../components/Start";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

import {COLORS} from "../color";

export default function Home () {
    const [view, setView] = useState('start')
    const goBack = ()=> setView('start')
    return (
        <View style={styles.container}>
            {view === 'start' && <Start setView={setView}/> }
            {view === 'login' && <Login goBack={goBack}/>}
            {view === 'signUp' && <SignUp goBack={goBack}/>}
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        height: '100%',
    },
});
