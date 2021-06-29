import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, FlatList, Image, Pressable, } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import Item from '../../components/item';

const ListItem = () => {
    const route = useRoute();
    const [arr, setarr] = useState([]);
    const [loading, setloading] = useState<boolean>(true)
    useEffect(() => {
        setloading(true)
        setarr([])
        route.params.ref.collection(`${route.params.id}`).onSnapshot(snap => {
            // setarr(snap);
            setloading(true)
            setarr([])
            snap.forEach(doc => {
                console.log(doc)
                // setarr(oldArray => [...oldArray, doc.data()])    **
                setarr(oldArray => [...oldArray, doc])      //
            });
            setloading(false)
        })
        setloading(false)

        return () => {
            setarr([]); // This worked for me

        };
    }, [])
    if (loading) {
        return (
            <View>
                <Text>lodinf</Text>
            </View>
        )
    }
    return (
        <View>

            <FlatList
                data={arr}
                renderItem={({ item }) => (
                    <Item items={item} />
                )}
                keyExtractor={(item) => item.data().Id}
            />




        </View >
    )

}

export default ListItem;


// <View>
// <Text> {route.params.id} </Text>
// <Text> {route.params.id} </Text>

// <View>
//     <FlatList
//         data={arr}
//         renderItem={({ item }) =>

//             <Text>{item.Name}</Text>

//         }
//         keyExtractor={(item) => item.Id}
//     />
// </View>

// {/* 
// {


//     arr.forEach(doc =>
//     (

//         <Text>{doc.data().items[0].name} bjhb</Text>

//     )
//         // console.log(doc.data().items[0].name);
//     )


// } */}

// </View>


