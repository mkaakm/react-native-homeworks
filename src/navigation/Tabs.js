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
                <Tab.Screen name="Home" component={Home} options={{tabBarLabel: () => null}} />
                <Tab.Screen name="All books" component={AllBooks} options={{tabBarBadge: 3, tabBarLabel: () => null}}/>
                <Tab.Screen name="List Of Books" component={ListOfBooksCurrently} options={{tabBarLabel: () => null}}/>
                <Tab.Screen name="Book Shop" component={BookShop} options={{tabBarLabel: () => null}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
