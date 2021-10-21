import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';

import {COLORS} from "../../color";
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Books Read',
        count: 3
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Pages Read',
        count: 800
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Worth read',
        count: 3
    },
];

const Item = ({ title, count }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{count}</Text>
    </View>
);

export default function  UserActivity () {
    const renderItem = ({ item }) => (
        <Item title={item.title} count={item.count} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30,
    },
    item: {
        height: 70,
        color: "#000",
        borderColor: COLORS.secondary,
        backgroundColor:'#000',
        borderStyle:'solid',
        borderWidth: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 25,
        width: '30%',
        justifyContent:'center',
        padding: 5,
        borderRadius: 10
    },
    title: {
        textAlign: 'center',
        marginBottom: 5,
        color:COLORS.primary
    },
    count:{
        color:COLORS.primary,
        fontSize: 14,
        textAlign:'center',
    }
});

