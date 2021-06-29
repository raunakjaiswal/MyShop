import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import OrderAddressScreen from '../screens/OrderAddressScreen';
import CartScreen from '../screens/BottomTab/CartScreen';
const Stack = createStackNavigator();


const CategoriesStack = () => {

    return (
        <Stack.Navigator initialRouteName="cartscreen" >
            <Stack.Screen name="cartscreen" component={CartScreen}
                options={{
                    title: 'cartscreen',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#b3ecff' },
                    headerShown: false

                }}
            />

            <Stack.Screen name="orderaddressscreen" component={OrderAddressScreen}
                options={{
                    title: 'Address',
                    headerTitleAlign: 'center',


                }

                }

            />
        </Stack.Navigator>
    )

}

export default CategoriesStack;