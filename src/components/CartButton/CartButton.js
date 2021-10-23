import React from 'react';
import {useSelector} from "react-redux";
import {StyleSheet, View} from "react-native";

import { Link } from '@react-navigation/native';

const CartButton = () =>{
    return(
        <View style={styles.link}>
            <Link to={{ screen: 'Cart'}}>
                Cart
            </Link>
        </View>
    )
}
const styles = StyleSheet.create({
    link:{
        fontSize: 20,
        color: '#fff',
        position: 'absolute',
        bottom:0,
        right: 0,
        width: '100%',
        backgroundColor: 'red'
    }
})

export default CartButton
