import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from "../screens/Home"
import AllBooks from "../screens/AllBooks";
import ListOfBooksCurrently from "../screens/ListOfBooksCurrently";
import BookShop from "../screens/BookShop";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

import {iconConfigs} from "./iconsConfigs";
export default function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{ showLabel: false }}
                screenOptions={({route}) => ({
                    headerStyle: {backgroundColor: '#000'},
                    headerTintColor: 'red',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({focused}) => {
                        const {iconName, size, color} = iconConfigs.getConfig(route.name, focused)
                        return (
                            <FontAwesome5 name={iconName} size={size} color={color}/>
                        )
                    },
                    tabBarStyle: {
                        backgroundColor: '#000',
                        borderTopWidth: 0
                    },
                })
                }
            >
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="AllBooks" component={AllBooks} options={{tabBarBadge: 3}}/>
                <Tab.Screen name="ListOfBooks" component={ListOfBooksCurrently}/>
                <Tab.Screen name="BookShop" component={BookShop}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
