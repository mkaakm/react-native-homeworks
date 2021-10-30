import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';

import Button from "../shared/Button/Button";

import { removeFromCart} from "../store/cart/cart-slice";
import {getCart} from '../store/cart/cart-selectors'

import {COLORS} from "../color";

const renderItem = ({ item }) => {
    return (
        <View style={styles.bookContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.textAuthor}>{item.author}</Text>
            <Text style={styles.textPrice}>{item.price} UAH</Text>
            <View style={styles.button}>
                <Button text='remove' type='dark' onPress={item.onPress}/>
            </View>
        </View>
    );
};

export default function AllBooks() {
    const books = useSelector(getCart)
    const dispatch = useDispatch()
    const removeBook = (book) => {
        dispatch(removeFromCart(book))
    }
    const items = books.map(item => ({...item, onPress: () => removeBook(item.id)}))
    const total = books.reduce((acum, item)=> acum+item.price, 0)
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                <Text style={styles.total}>Total: {total} UAH</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#000',
        position:'relative'
    },
    bookContainer:{
        justifyContent: 'center',
        marginBottom: 20,
        borderBottomColor:COLORS.primary,
        borderWidth:1
    },
    text:{
        fontSize: 18,
        color: COLORS.primary,
        paddingBottom:10,
        marginLeft:20,
    },
    textAuthor:{
        fontSize: 16,
        color: COLORS.primary,
        paddingBottom:10,
        marginLeft:20,
    },
    textPrice:{
        fontSize: 15,
        color: COLORS.primary,
        paddingBottom:10,
        marginLeft:20,
    },
    button:{
        marginBottom: 20,
        alignItems:'flex-end',
        marginRight:20,
        marginTop: -55
    },
    total:{
        fontSize: 20,
        color: COLORS.primary,
        textAlign:'center'
    }
});
