import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Credetianal/LoginScreen';
import RegisterScreen from '../screens/Credetianal/RegisterScreen';
import HomeScreen from '../screens/BottomTab/HomeScreen';
import BottomHomeTabNavigator from './BottomHomeTabNavigator';
import Feather from 'react-native-vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Content from './DrawerContent';
import ProfileScreen from '../screens/Drawer/ProfileScreen';
import OrderScreen from '../screens/Drawer/OrderScreen';
import AboutUsScreen from '../screens/Drawer/AboutUsScreen';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
import HomeBottomTab from './HomeBottomTab';


const HomeRoute = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home" drawerContent={props => <Content {...props} />}>
        <Drawer.Screen name="home" component={HomeBottomTab} />
        <Drawer.Screen name="profile" component={ProfileScreen} />
        <Drawer.Screen name="orders" component={OrderScreen} />
        <Drawer.Screen name="aboutus" component={AboutUsScreen} />

      </Drawer.Navigator>

    </NavigationContainer>
  );
};

export default HomeRoute;
