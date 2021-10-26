import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ListOfBooksCurrently() {

    return (
        <View style={styles.container}>
            <Text>ListOfBooksCurrently Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
