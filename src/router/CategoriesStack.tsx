import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/BottomTab/CategoriesScreen';
import ListItem from '../screens/ListItemScreen';
const Stack = createStackNavigator();


const CategoriesStack = () => {

    return (
        <Stack.Navigator initialRouteName="categorie">
            <Stack.Screen name="categorie" component={CategoriesScreen}
                options={{
                    title: 'categories',
                    headerTitleAlign: 'center',
                    headerShown: false

                }}
            />

            <Stack.Screen name="listitem" component={ListItem}
                options={{
                    title: 'listitem',
                    headerTitleAlign: 'center',

                }}

            />
        </Stack.Navigator>
    )

}

export default CategoriesStack;