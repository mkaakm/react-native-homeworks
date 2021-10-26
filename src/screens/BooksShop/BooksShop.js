import React from "react";

import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';

import Button from "../../shared/Button/Button";

import {useDispatch} from "react-redux";

import {addToCart} from "../../store/cart/cart-slice";

import {COLORS} from "../../color";

import {books} from "./books"

const renderItem = ({ item }) => {
    return (
        <View style={styles.bookContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.textAuthor}>{item.author}</Text>
            <Text style={styles.textPrice}>{item.price} UAH</Text>
            <Button text='buy' type='dark' onPress={item.onPress}/>
        </View>
    );
};

export default function AllBooks() {
    const dispatch = useDispatch()
    const addBook = (book) => {
        dispatch(addToCart(book))
    }
    const items = books.map(item => ({...item, onPress: () => addBook(item)}))
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    text:{
        fontSize: 20,
        color: COLORS.primary,
        paddingBottom:10
    },
    textAuthor:{
        fontSize: 15,
        color: COLORS.primary,
        paddingBottom:10
    },
    textPrice:{
        fontSize: 15,
        color: COLORS.primary,
        paddingBottom:10
    }
});
