import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
// import CategoriesScreen from '../screens/BottomTab/CategoriesScreen';
// import ListItem from '../screens/ListItemScreen';
import HomeScreen from '../screens/BottomTab/HomeScreen';
import HomeItemScreen from '../screens/BottomTab/HomeScreen/Item';
const Stack = createStackNavigator();


const HomeStack = () => {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen name="HomeItem" component={HomeItemScreen}
                options={{
                    title: 'listitem',
                    headerTitleAlign: 'center',

                }}

            />
        </Stack.Navigator>
    )

}

export default HomeStack;