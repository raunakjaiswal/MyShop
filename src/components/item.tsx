import React, { Component } from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { showMessage, hideMessage } from "react-native-flash-message";
const Item = (props) => {
    const pres = async () => {

        try {
            await firestore().collection('customers').doc(`${auth().currentUser?.uid}`).collection('Cart').doc('cart').collection('items').doc(`${props.items.data().Id}`).set({

                path: props.items.ref.path,
                Numberofitems: 1
            }).then(() => {
                showMessage({
                    message: "item added",
                    type: "success",
                    duration: 500,
                    floating: true,
                    icon: 'success',
                    style: { backgroundColor: '#befae3', borderRadius: 50, justifyContent: 'space-evenly' },
                    // textStyle: { color: 'black' },
                    titleStyle: { color: 'black', fontSize: 18 },
                    position: 'bottom'


                });
            })
        } catch (error) {
            console.log("kucj")
        }
    }
    return (
        <View style={{ flexDirection: 'row', margin: 10, borderWidth: 1, borderColor: 'black' }}>
            <Image style={{ height: 150, flex: 2 }} source={{ uri: `${props.items.data().Image}` }} />
            <View style={{ flex: 3 }}>
                <Text>{props.items.data().Name}</Text>
                <View>
                    <Text>About: {props.items.data().About}</Text>
                </View>

                <View>
                    <Text>quantity: {props.items.data().Quantity}</Text>
                </View>
                <View>
                    <Text>Price: Rs{props.items.data().Price}</Text>
                </View>

                <View>
                    <Text>Availability: {props.items.data().Availability ? "Yes" : "No"}</Text>
                </View>
                <Pressable style={{ height: 20, position: 'absolute', marginBottom: 2, bottom: 0, backgroundColor: '#00ffbf', width: '90%', justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginRight: 10 }}
                    onPress={pres}
                >
                    <Text>Add to Bag</Text>
                </Pressable>
            </View>

        </View>

    )

}

export default Item;