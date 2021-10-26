import React, {useState} from "react";
import {StyleSheet,TextInput, View, Text} from 'react-native';

import {icons} from "./icons";
import {Feather} from '@expo/vector-icons';

export default function Input(props) {
  const {
    placeholder,
    keyboardType,
    value,
    placeholderTextColor,
    required = false,
    iconName,
    isSecure = false,
  } = props;
  const [secure, setSecure] = useState(true);
  const [text, setText] = useState(null);
  const [error, setError] = useState(null);
  const endEdit = (e) => {
    setText(e.nativeEvent.text);
    if (text === "" && required) {
      setError("Field is required");
    }
  };
  const switchSecure = () => {
    setSecure((prevState) => !prevState);
  };
  return (
    <View style={styles.inputIconContainer}>
      {iconName && icons[iconName]}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        value={value}
        onEndEditing={endEdit}
      />
      {error && <Text>{error}</Text>}
      {isSecure && secure ? (
        <Feather name="eye" style={styles.secureIcon} onPress={switchSecure} />
      ) : (
        <Feather name="eye-off" style={styles.secureIcon} onPress={switchSecure} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    inputIconContainer: {
        backgroundColor: 'transparent',
        color: '#fff',
    },
    input:{
        height: 40,
        padding: 10,
        color: "#fff",
        borderColor: 'red',
        borderRadius: 25,
        backgroundColor: 'transparent',
        borderStyle:'solid',
        borderWidth: 1,
        paddingLeft: 50,
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 25,
        width: '80%',
        shadowColor:"red",
        shadowOffset:{
            width: 2,
            height: 2
        },
        shadowOpacity:0.9,
        shadowRadius:20,
        elevation:10,
    },
    text:{
        fontSize: 14,
        color: 'red',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        position:'relative',
        top: -15
    },
    secureIcon:{
        color:'red',
        position: 'absolute',
        right: '15%',
        top: 7,
        fontSize: 25
    },
});
