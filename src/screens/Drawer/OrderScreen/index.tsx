import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import OrderList from '../../../components/orders';

const OrderScreen = () => {
    const [datearray, setdatearray] = useState([])
    useEffect(() => {
        firestore().collection('customers').doc(`${auth().currentUser?.uid}`).collection('Orders').onSnapshot(snap => {
            setdatearray([])
            snap.forEach((doc) => {
                setdatearray(oldarray => [...oldarray, doc])
            })
        })

    }, [])

    return (
        <View>
            <FlatList
                data={datearray}
                renderItem={({ item }) => (
                    <OrderList orderdata={item} />
                )}
                keyExtractor={(item) => item.id}
            />

        </View>
    )

}

export default OrderScreen;
