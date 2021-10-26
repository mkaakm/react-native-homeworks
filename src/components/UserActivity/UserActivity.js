import React from 'react';

import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';

import {COLORS} from "../../color";

const Item = ({ title, count }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{count}</Text>
    </View>
);

export default function  UserActivity ({activity}) {

    const renderItem = ( {item} ) => {
        return  <Item title={item.title} count={item.description}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            {activity?.items && <FlatList
                data={activity.items}
                renderItem={renderItem}
                keyExtractor={item => item.itemId}
                numColumns={3}
            />}
            {!activity && <Text>No activity items</Text>}
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
    },
    image:{
        width: 40,
        height: 40
    }
});
