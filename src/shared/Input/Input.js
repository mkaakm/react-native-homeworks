import React, {useState} from "react";
import {StyleSheet,TextInput, View, Text} from 'react-native';

import {Feather} from '@expo/vector-icons';

import {icons} from "./icons";
import {COLORS} from "../../color";

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
  const [secure, setSecure] = useState(isSecure);
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
  const secureIcon = secure ? "eye-off" : "eye";
  return (
    <View style={styles.inputIconContainer}>
      {iconName && icons[iconName]}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        value={value}
        secureTextEntry={secure}
        onEndEditing={endEdit}
      />
      {error && <Text>{error}</Text>}
      {isSecure && <Feather name={secureIcon} style={styles.secureIcon} onPress={switchSecure} />}
    </View>
  );
}

const styles = StyleSheet.create({
    inputIconContainer: {
        backgroundColor: 'transparent',
        color: COLORS.primary,
    },
    input:{
        height: 40,
        padding: 10,
        color: COLORS.primary,
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
        shadowColor:COLORS.secondary,
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
        color: COLORS.secondary,
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        position:'relative',
        top: -15
    },
    secureIcon:{
        color:COLORS.secondary,
        position: 'absolute',
        right: '15%',
        top: 7,
        fontSize: 25
    },
});
