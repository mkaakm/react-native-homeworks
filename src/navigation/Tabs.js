import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from "../screens/Home"
import Profile from "../screens/Profile";
import BooksShop from "../screens/BooksShop";
import Cart from "../screens/Cart";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

import {iconConfigs} from "./iconsConfigs";

export default function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{showLabel: false}}
                screenOptions={({route}) => ({
                    headerStyle: {backgroundColor: '#000'},
                    headerTintColor: 'red',
                    headerTitleAlign: 'center',
                    tabBarIcon: ({focused, size, color}) => {
                        const props = iconConfigs.getConfig(route.name, focused)
                        return (
                            <FontAwesome5 name={props.iconName} size={props.size} color={props.color}/>
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
                <Tab.Screen name="Profile" component={Profile}/>
                <Tab.Screen name="BookShop" component={BooksShop}/>
                <Tab.Screen name="Cart" component={Cart}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

