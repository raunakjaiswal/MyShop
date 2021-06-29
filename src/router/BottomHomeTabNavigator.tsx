import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/BottomTab/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SearchScreen from '../screens/BottomTab/SearchScreen';
import CategoriesScreen from '../screens/BottomTab/CategoriesScreen';
import CartScreen from '../screens/BottomTab/CartScreen';
import CategoriesStack from './CategoriesStack';
import CartStack from './CartStack';
import HomeStack from './HomeStack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const tab = createBottomTabNavigator();

const BottomHomeTabNavigator = () => {
  return (
    <tab.Navigator sceneContainerStyle={{ backgroundColor: 'white' }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 13,
          color: 'black'
        },
        activeTintColor: 'black',
        inactiveTintColor: '#ff0066',
        // activeBackgroundColor: '#c4461c',
        // inactiveBackgroundColor: '#b55031',
        style: {
          backgroundColor: '#ffe6f0',
          paddingBottom: 3
        }

      }}
      initialRouteName="home"
    >
      <tab.Screen
        name="homes"
        component={HomeStack}

        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={22} color={color} />
          ),
          unmountOnBlur: true,
          tabBarVisible: (() => {
            // const routename = route.state ? route.state.routeNames[route.state.index] : '';
            const routename = getFocusedRouteNameFromRoute(route) ?? ""
            if (routename ===
              'HomeItem')
              return false

            return true
          })(),



        })}
      />

      <tab.Screen
        name="Categories"
        component={CategoriesStack}
        // options={{
        //   tabBarIcon: ({ color }) => (
        //     <MaterialIcons name="category" size={22} color={color} />
        //   ),
        //   unmountOnBlur: true
        // }}
        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={22} color={color} />
          ),
          tabBarVisible: (() => {
            // const routename = route.state ? route.state.routeNames[route.state.index] : '';
            const routename = getFocusedRouteNameFromRoute(route) ?? ""
            if (routename === 'listitem')
              return false

            return true
          })(),
          unmountOnBlur: true


        })}
      />
      <tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={22} color={color} />
          ),
          unmountOnBlur: true
        }}
      />
      <tab.Screen
        name="Carts"
        component={CartStack}

        options={({ route }) => ({
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={22} color={color} />
          ),
          tabBarVisible: (() => {
            // const routename = route.state ? route.state.routeNames[route.state.index] : '';
            const routename = getFocusedRouteNameFromRoute(route) ?? ""
            if (routename === 'orderaddressscreen')
              return false

            return true
          })(),



        })}
      />


    </tab.Navigator >
  );
};

export default BottomHomeTabNavigator;
