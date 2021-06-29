import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, Pressable, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
const CartItem = ({ items, reff }) => {

    const [dataa, setdataa] = useState([]);
    useEffect(() => {
        try {
            firestore().doc(`${items.data().path}`).onSnapshot(async (snap) => {
                setdataa([])
                await reff.doc(`${items.id}`).update({
                    Price: (snap.data().Price)

                })
                setdataa(snap.data())
            })
        } catch (error) {
            console.log("error1")
        }

        return (() => {
            setdataa([])
        })
    }, [])

    const onMinus = async () => {

        await reff.doc(`${items.id}`).update({
            Numberofitems: (Math.max(items.data().Numberofitems - 1, 1))

        })
        // setquantity(1)
    }
    const onPlus = async () => {
        // setquantity(0)
        // console.log(props.items.id)
        await reff.doc(`${items.id}`).update({
            Numberofitems: (Math.min(items.data().Numberofitems + 1, 10))
        })
        // setquantity(1)
    }

    const deleteitem = () => {
        // setquantity(0)
        reff.doc(`${items.id}`).delete().then(() => {
            // setquantity(1);
            console.log('deleted')
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });


    }
    return (

        <View style={{ borderWidth: 0.5, paddingBottom: 8, margin: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ height: 100, flex: 2 }} source={{ uri: `${dataa.Image}` }} />
                <View style={{ flex: 4, marginLeft: 20 }} >
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>{dataa.Name}</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        {/* <Text>{items.data().About}</Text> */}
                        <Text numberOfLines={2} style={{ fontSize: 15, fontWeight: '400' }}>{dataa.About}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginTop: 5 }}>
                        <View>
                            <Text style={{ fontSize: 17, fontWeight: '800' }}>Rs{dataa.Price}/{dataa.Quantity}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>Rs{dataa.Price * items.data().Numberofitems}</Text>
                        </View>
                    </View>


                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: '300' }}>Quantity selector: </Text>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <View style={styles.root}>
                        <Pressable onPress={onMinus} style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                        </Pressable>

                        <Text style={styles.quantity}>{items.data().Numberofitems ? items.data().Numberofitems : '0'} </Text>

                        <Pressable style={styles.button} onPress={onPlus}>
                            <Text style={styles.buttonText}>+</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={deleteitem}>
                        <MaterialCommunityIcons name="delete" size={24} />
                    </Pressable>
                </View>
            </View>
        </View>
    )

}

export default CartItem;

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