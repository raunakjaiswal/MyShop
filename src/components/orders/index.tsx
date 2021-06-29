import React, { useState, useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import OrderInfo from './orderinfo';
import firestore from '@react-native-firebase/firestore';
const OrderList = (props) => {
    // console.log(props.orderdata)
    const [orderdata, setorderdata] = useState([])
    const [status, setstatus] = useState([])
    useEffect(() => {
        firestore().doc(`${props.orderdata.data().path}`).onSnapshot(snap => {
            // console.log(snap.data().Orderitem)
            setorderdata(snap.data().Orderitem)
            setstatus(snap.data().Status)

        })
        // console.log(orderdata)
        // console.log(orderdata.Address)
        // console.log(orderdata.Address.Name)
        return (() => {
            setorderdata([])
            setstatus([])
        })
    }, [])

    const showitemlist = () => {
        console.log('list')
    }
    if (orderdata == [] || orderdata.Address === undefined || status.Delivered === undefined) {
        return (
            <View>
                <Text> loadinf</Text>
            </View>
        )
    }
    return (

        <Pressable onPress={showitemlist} style={{ borderWidth: 1, borderColor: 'black', marginTop: 10, marginLeft: 5, marginRight: 5 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Code: 54848</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>Date: {orderdata.Date}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>Total Price: {orderdata.Total_price}</Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>Name:  {orderdata.Address.Name} </Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>Address: </Text>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>{orderdata.Address.BuildingName}, {orderdata.Address.RoadName}, {orderdata.Address.City}, {orderdata.Address.State}, {orderdata.Address.Pincode}</Text>
                <Text style={{ fontSize: 18, fontWeight: '300', marginTop: 10 }}>Phone Number: {orderdata.Address.PhoneNumber}</Text>
            </View>
            <View>
                <OrderInfo Status={status} />
            </View>

        </Pressable>
    )

}

export default OrderList;