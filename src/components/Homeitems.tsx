import React, { Component } from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import HomeItemScreen from '../screens/BottomTab/HomeScreen/Item'
import { useNavigation } from '@react-navigation/native';
const Homeitem = (props) => {

    const navigation = useNavigation();

    const pressed = () => {

        navigation.navigate('HomeItem', { path: props.item.ref.path, data: props.item.data() });

    }
    return (
        // <View>
        <Pressable onPress={pressed} style={{ width: 180, justifyContent: 'center', alignItems: 'center', marginRight: 10, marginLeft: 10, borderWidth: 1, borderColor: 'black' }}>
            <View >
                <Image style={{ width: 175, height: 130, resizeMode: "cover" }} source={{ uri: props.item.data().Image }} />
            </View>
            <View >
                <Text> {props.item.data().Name}</Text>
            </View>
            <View>
                <Text numberOfLines={1}>{props.item.data().About}</Text>
            </View>
            <View>
                <Text>Price: Rs{props.item.data().Price}/{props.item.data().Quantity}</Text>
            </View>
        </Pressable>
        // </View>
    )

}

export default Homeitem;