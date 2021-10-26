import React, {useState} from 'react';

import { StyleSheet, View,  } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Start from "../components/start/start";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

export default function Home () {
    const [screen, setScreen] = useState('start')
    const goBack = ()=> setScreen('start')
    return (
        <View style={styles.container}>
            {screen === 'start' && <Start setScreen={setScreen}/> }
            {screen === 'login' && <Login goBack={goBack}/>}
            {screen === 'signUp' && <SignUp goBack={goBack}/>}
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
});
