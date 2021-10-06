import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default function AllBooks() {

    return (
        <View style={styles.container}>
            <Text>All Books Screen</Text>
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
