import React from "react";

import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Button from "../components/shared/Button/Button";
import {useDispatch, useSelector} from "react-redux";

import { removeFromCart} from "../store/cart/cart-slice";
import {getCart} from '../store/cart/cart-selectors'

const renderItem = ({ item }) => {
    return (
        <View style={styles.bookContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.textAuthor}>{item.author}</Text>
            <Text style={styles.textPrice}>{item.price} UAH</Text>
            <Button text='remove' type='dark' onPress={item.onPress}/>
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
                <Text style={styles.total}>Total:{total}</Text>
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
        color: "#fff",
        paddingBottom:10
    },
    textAuthor:{
        fontSize: 15,
        color: "#fff",
        paddingBottom:10
    },
    textPrice:{
        fontSize: 15,
        color: "#fff",
        paddingBottom:10
    },
    total:{
        fontSize: 15,
        color: "#fff",
    }
});
