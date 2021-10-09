import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import {homeLinkIcon, phoneLinkIcon, mailLinkIcon} from './Icons'

const DATA = [
    {
        id: 'bd2acbea-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'Kiev',
        icon: homeLinkIcon
    },
    {
        id: '3ac18afc-c605-48d3-a4f8-fbd91aa97f63',
        text: '+38(050)-453-44-55',
        icon: phoneLinkIcon
    },
    {
        id: '38694a0f-3da1-471f-bd96-145571e29d72',
        text: 'YourName@Gmail.com',
        icon: mailLinkIcon
    },
];

const Item = ({ title, icon }) => (
    <View style={styles.item}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function  UserInfo () {
    const renderItem = ({ item }) => (
        <Item title={item.text} icon={item.icon}/>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
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
        backgroundColor:'#000',
        borderColor: 'red',
        borderStyle:'solid',
        borderWidth: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 25,
        width: '80%',
        borderRadius: 15,
        justifyContent:'center'
    },
    title: {
        paddingLeft: 40,
        marginTop:-20,
        color:'#fff'
    },
    icon:{
        paddingLeft:10,
    }
});

