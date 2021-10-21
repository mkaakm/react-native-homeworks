import {StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
    inputIcon: {
        backgroundColor: 'red',
        position: 'absolute',
        fontSize: 25,
        left: 60,
        top: 7
    },
})

export const icons = {
    user: <Feather name='user' style={styles.inputIcon} />,
    lock: <Feather name="lock" style={styles.inputIcon}/>,
    email: <MaterialCommunityIcons name="email" style={styles.inputIcon} />,
    phone: <MaterialCommunityIcons name="phone" style={styles.inputIcon} />

}

