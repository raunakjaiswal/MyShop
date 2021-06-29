import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ToTalCartPrice = ({ Price }) => {
    // console.log(props.cartref)
    const [TotalPrice, setTotalPrice] = useState(0);

    return (
        <View style={{ flexDirection: 'row', margin: 15, borderWidth: 1, borderColor: 'black', height: 50, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <View >
                <Text style={{ fontSize: 20, }}>TotalPrice: </Text>
            </View>
            <View  >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Rs. {Price} </Text>
            </View>

        </View>
    )

}

export default ToTalCartPrice;