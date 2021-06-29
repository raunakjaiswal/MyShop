import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomHomeTabNavigator from './BottomHomeTabNavigator';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

const HomeBottomTab = ({ navigation }) => {

    const getHeaderTitle = (route) => {
        console.log(route)
        return "nn"
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="bottomtab" component={BottomHomeTabNavigator}
                options={{
                    title: 'My Grocery shop',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#ffe6f0' },
                    headerLeft: () =>
                        <Feather name="menu" size={22} color={'black'} onPress={() => {
                            navigation.toggleDrawer();
                        }}

                        />


                }}
            // options={({ route }) => ({

            //     // headerShown: (() => {
            //     //     console.log(route)
            //     //     // const index = route
            //     //     // if (index === 0)
            //     //     //     return true

            //     //     return false
            //     // })(),
            //     headerTitle: getHeaderTitle(route)
            //     // headerShown: true
            // })}



            />
        </Stack.Navigator>
    )
}
export default HomeBottomTab;
