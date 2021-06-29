
import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
const OrderInfo = (props) => {
    console.log(props.Status)

    const funcancel = () => {
        console.log("bmhb")
    }
    if (props.Status.Cancel) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, backgroundColor: 'red' }}>
                <Text style={{ fontSize: 18, fontWeight: '300' }}> Cancelled</Text>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <View style={{ flex: 3, marginBottom: 10 }}>
                {/* <Text>...</Text> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                        <Text>Ordered</Text>
                        <View style={{ marginTop: 5 }}>
                            {props.Status.Ordered ? (<AntDesign name="checkcircle" size={18} color="green" />) : (<Entypo name="circle" size={18} />)}
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Packed</Text>
                        <View style={{ marginTop: 5 }}>
                            {props.Status.Packed ? (<AntDesign name="checkcircle" size={18} color="green" />) : (<Entypo name="circle" size={18} />)}

                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Shipped</Text>
                        <View style={{ marginTop: 5 }}>
                            {props.Status.Shipped ? (<AntDesign name="checkcircle" size={18} color="green" />) : (<Entypo name="circle" size={18} />)}
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginBottom: 10, flex: 2, }}>
                {
                    props.Status.Delivered ?
                        (
                            <View style={{ height: 30, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18 }}>Delivered</Text>
                                <AntDesign name="checkcircle" size={18} color="green" />
                            </View>
                        )
                        :
                        (<Pressable onPress={funcancel} style={{ borderWidth: 1, height: 30, borderColor: 'red', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18 }}>Cancel</Text>
                        </Pressable>)
                }

            </View>

        </View>

    )
}

export default OrderInfo