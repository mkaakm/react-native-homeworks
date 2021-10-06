import React from 'react';
import {StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../screens/Home"
import AllBooks from "../screens/AllBooks";
import ListOfBooksCurrently from "../screens/ListOfBooksCurrently";
import BookShop from "../screens/BookShop";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

export default function Tabs() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon:({focused,size,color})=>{
                        let iconName;
                        if (route.name === 'Home'){
                            iconName='home' ;
                            size=focused? 25:20;
                            color=focused? 'red':'#000' ;
                        }else if (route.name === 'All books'){
                            iconName='book' ;
                            size=focused? 25:20;
                            color=focused? 'red':'#000'
                        }else if (route.name === 'List Of Books'){
                            iconName='bookmark';
                            size=focused? 25:20;
                            color=focused? 'red':'#000'
                        }else if (route.name === 'Book Shop'){
                            iconName='shopping-basket';
                            size=focused? 25:20;
                            color=focused? 'red':'#000'
                        }
                        return(
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    }
                })
                }
            >
                <Tab.Screen name="Home" component={Home} options={{tabBarLabel: ()=> null}}/>
                <Tab.Screen name="All books" component={AllBooks} options={{tabBarBadge: 3, tabBarLabel: ()=> null}}/>
                <Tab.Screen name="List Of Books" component={ListOfBooksCurrently} options={{tabBarLabel: ()=> null}}/>
                <Tab.Screen name="Book Shop" component={BookShop} options={{tabBarLabel: ()=> null}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
