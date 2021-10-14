import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import {icons} from './Icons'


const Item = ({title, icon}) => (
    <View style={styles.item}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function UserInfo({user = {}}) {
    const data = Object.entries(user).map(([key, value])=>{
        return {
            name: key,
            title: value,
            icon: icons[key]
        }
    })

    const renderItem = ({item}) => {
        return <Item title={item.title} icon={item.icon}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item: {
        height: 40,
        color: "#fff",
        backgroundColor: '#000',
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 25,
        width: '80%',
        borderRadius: 15,
        justifyContent: 'center'
    },
    title: {
        paddingLeft: 40,
        marginTop: -20,
        color: '#fff'
    },
    icon: {
        paddingLeft: 10,
    }
});

