import React, {useState} from 'react' ;
import { StyleSheet, View } from 'react-native' ;

import { StatusBar } from 'expo-status-bar' ;

import Start from "./src/components/Start";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";

export default function App() {
  const [view, setView] = useState('start')
  const goBack = ()=> setView('start')
  return (
      <View style={styles.container}>
        {view === 'start' && <Start setScreen={setView}/> }
        {view === 'login' && <Login goBack={goBack}/>}
        {view === 'signUp' && <SignUp goBack={goBack}/>}
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


