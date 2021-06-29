import React, { useState, useEffect } from 'react'
import { ScrollView, Text, View, Image, Pressable, StyleSheet, FlatList, Button, SafeAreaView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartItem from '../../../components/CartItem'
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import ToTalCartPrice from '../../../components/TotalCartPrice';
import { useNavigation } from '@react-navigation/native';


const CartScreen = () => {
    const navigation = useNavigation();
    // const [quantity, setquantity] = useState(1);
    const [cartarr, setcartarr] = useState([]);
    // const cartreff = firestore().collection('customers').doc(`${auth().currentUser?.uid}`).collection('Cart').doc('cart').collection('items');
    const cartreff = firestore().collection('customers').doc(`${auth().currentUser?.uid}`).collection('Cart').doc('cart').collection('items');

    console.log(cartreff)
    const [loading, setloading] = useState(false);
    const [price, setprice] = useState(0)
    useEffect(() => {

        try {
            cartreff.onSnapshot(snap => {
                setcartarr([]);
                setloading(true)
                setprice(0)
                snap.forEach(async (doc) => {
                    setprice(previous => previous + doc.data().Price * doc.data().Numberofitems)
                    setcartarr(oldArray => [...oldArray, doc])

                })
                setloading(false)
            })
        } catch (error) {
            console.log("nhjb")
        }

        return () => {
            setcartarr([]); // This worked for me
        };
    }, [])

    const clicked = () => {

        navigation.navigate('orderaddressscreen', { TotalPrice: price, Items: cartarr });
    }
    // console.log(cartarr[0])
    // if (cartarr === []) {
    //     console.log("yes")
    // }
    if (cartarr[0] === undefined) {
        return (
            <View>
                <Text>Add item in your cart </Text>
            </View>
        )
    }
    if (loading) {
        return (
            <View>
                <Text>loading </Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View >
                <FlatList
                    data={cartarr}

                    renderItem={({ item }) => (

                        <CartItem items={item} reff={cartreff} />

                    )}
                    // keyExtractor={(item) => item.data().Productid}   **
                    keyExtractor={(item) => item.data().path}
                    ListFooterComponent={() => (

                        <View>
                            <View>
                                <ToTalCartPrice Price={price} />

                            </View>
                            <View style={{ margin: 10 }}>

                                <Button

                                    title='place order'
                                    onPress={clicked}
                                />
                            </View>
                        </View>
                    )
                    }
                />

            </View>
        </SafeAreaView>




    )
}


export default CartScreen;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4d4d33',
        width: 130,
        justifyContent: 'space-between',

    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d6d6c2',
    },
    buttonText: {
        fontSize: 18,
    },
    quantity: {
        color: '#000066',
    },
});