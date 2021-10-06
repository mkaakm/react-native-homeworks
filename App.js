import React, {useState} from 'react' ;
import { StyleSheet, View } from 'react-native' ;

import { StatusBar } from 'expo-status-bar' ;

import Start from "./src/components/start/start";
import Login from "./src/components/Login/Login";
import SignUp from "./src/components/SignUp/SignUp";

export default function App() {
  const [screen, setScreen] = useState('start')
  const goBack = ()=> setScreen('start')
  return (
      <View style={styles.container}>
        {screen === 'start' && <Start setScreen={setScreen}/> }
        {screen === 'login' && <Login goBack={goBack}/>}
        {screen === 'signUp' && <SignUp goBack={goBack}/>}
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
});


