import React from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, ImageBackground, Image} from "react-native";

import UserActivity from "../UserActivity/UserActivity";
import UserInfo from "../UserInfo/UserInfo";
export default function Profile (){
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.backgroundImage}>
                    <TouchableOpacity>
                        <ImageBackground source={require('../../../assets/Lihtman.png')} style={styles.backgroundImageStyles}>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.avatarImage}>
                        <Image source={require('../../../assets/Lihtman.png')} style={styles.avatarImageStyles}>
                        </Image>
                    <Text style={styles.avatarText}>Anna Lihtman</Text>
                </View>
            </ScrollView>
            <UserActivity/>
            <UserInfo/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#000',
    },
    backgroundImage:{
        width: '100%',
        height: 150
    },
    backgroundImageStyles:{
        width:'100%',
        height: 150
    },
    avatarImage:{
        alignItems: 'center',
        marginBottom: 35
    },
    avatarImageStyles:{
        width:140,
        height: 140,
        borderRadius: 100,
        marginTop: -70,
    },
    avatarText:{
        fontSize:25,
        fontWeight: 'bold',
        padding: 10,
        color:'#fff'
    }

})
