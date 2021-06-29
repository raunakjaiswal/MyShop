import React, { useState, useEffect } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, Pressable, StyleSheet, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { showMessage, hideMessage } from "react-native-flash-message";
import auth from '@react-native-firebase/auth';

const HomeItemScreen = () => {
    const [quantity, setquantity] = useState<number>(1)
    const route = useRoute();
    const [showitem, setshowitem] = useState([])
    useEffect(() => {
        firestore().doc(`${route.params.path}`).onSnapshot(snap => {
            setshowitem([])
            setshowitem(snap.data())
        })
    }, [])
    const onMinus = async () => {
        setquantity(Math.max(quantity - 1, 1))
    }
    const onPlus = async () => {
        setquantity(Math.min(quantity + 1, 10))
    }
    const addtocart = async () => {
        try {

            await firestore().collection('customers').doc(`${auth().currentUser?.uid}`).collection('Cart').doc('cart').collection('items').doc(`${showitem.Id}`).set({

                path: route.params.path,
                Numberofitems: quantity
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
            console.log(error.message)
        }

    }
    const notify = () => {
        showMessage({
            message: "you will be notified ",
            type: "info",
            duration: 500,
            floating: true,
            icon: 'info',
            style: { backgroundColor: '#94fff8', borderRadius: 50, justifyContent: 'space-evenly' },
            // textStyle: { color: 'black' },
            titleStyle: { color: 'black', fontSize: 18 },
            position: 'bottom'


        });
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ marginBottom: 50 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Image style={{ height: 300, width: 300 }} resizeMode={'cover'} source={{ uri: showitem.Image }} />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <View style={{ marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{showitem.Name}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '300' }}>{showitem.About}
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '300' }}>Price: Rs{showitem.Price}/{showitem.Quantity}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: '300' }}>Quantity selector: </Text>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                            <View style={styles.root}>
                                <Pressable onPress={onMinus} style={styles.button}>
                                    <Text style={styles.buttonText}>-</Text>
                                </Pressable>

                                <Text style={styles.quantity}>{quantity} </Text>

                                <Pressable style={styles.button} onPress={onPlus}>
                                    <Text style={styles.buttonText}>+</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </View>


            </ScrollView>
            <View style={{ bottom: 0, left: 0, right: 0, position: 'absolute', flexDirection: 'row', marginBottom: 5 }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '900' }}>{showitem.Availability ? 'Available' : 'out of stock'}</Text>
                </View>
                {
                    showitem.Availability ?
                        (
                            <TouchableOpacity onPress={addtocart} style={{ flex: 2 }}>
                                <View style={{ backgroundColor: 'red', height: 40, justifyContent: 'center', alignItems: 'center' }}>

                                    <Text style={{ fontSize: 18, fontWeight: '900', color: 'white' }}>Add to Cart</Text>
                                </View>
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity onPress={notify} style={{ flex: 2 }}>
                                <View style={{ backgroundColor: 'red', height: 40, justifyContent: 'center', alignItems: 'center' }}>

                                    <Text style={{ fontSize: 18, fontWeight: '900', color: 'white' }}>Notify</Text>
                                </View>
                            </TouchableOpacity>
                        )
                }

            </View>
        </View>
    )

}

export default HomeItemScreen;


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