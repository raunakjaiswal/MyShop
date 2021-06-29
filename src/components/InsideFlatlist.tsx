import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import Homeitem from './Homeitems';
const InsideFlatList = (props) => {
    const [listdata, setlistdata] = useState([])

    useEffect(() => {
        firestore().collection(`${props.data.Path}`).onSnapshot(snap => {
            setlistdata([])
            snap.forEach(doc => {
                setlistdata(oldarr => [...oldarr, doc])
            });
        })
    }, [])
    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ marginLeft: 20, marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.data.Title}</Text>
            </View>
            <FlatList
                data={listdata}
                renderItem={({ item }) =>
                    <Homeitem item={item} reff={props.data.Path} />
                }
                horizontal={true}
                keyExtractor={(item) => item.id}

            />
        </View>
    )

}

export default InsideFlatList;