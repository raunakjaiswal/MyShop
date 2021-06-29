import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import BelowTitle from './belowtitle';
const MainTitle = (props) => {


    const [image, setiamge] = useState('https://firebasestorage.googleapis.com/v0/b/myonlineshop-9a82c.appspot.com/o/raunak.jpeg?alt=media&token=60a96e79-a3d1-4bde-ad4b-7b1751fa75dd');
    const refinside = (props.reff.collection(`${props.data}`).doc(`${props.data.toLowerCase()}`));
    const [insdidedata, setinsidedata] = useState([])

    useEffect(() => {
        refinside.onSnapshot(val => {
            setiamge(val.data().image)
            setinsidedata(val.data().item)
        })
        return () => {
            // This worked for me
            setinsidedata([])
        };
    }, [])

    // refinside.collection('')


    return (
        <View style={styles.root}>
            {/* // title */}
            <View style={styles.uppercont}>
                <View style={styles.titlecont}>
                    <Text style={styles.titlestyle}>{props.data}</Text>
                </View>
                {/* {props.reff.collection(`${props.data}`).doc(`${props.data.toLowerCase()}`).data().image} */}
                <Image source={{ uri: image }}
                    style={styles.image}
                />
            </View>
            <View style={styles.belowcont}>
                <View style={styles.gridcont}>

                    <FlatList
                        // style={{ flexDirection: 'column' }}
                        // numColumns={3}
                        data={insdidedata}
                        // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
                        renderItem={({ item, index }) => (
                            <BelowTitle itemss={item} reff={refinside} />
                        )}
                        keyExtractor={(item) => item}
                        horizontal={true}



                    />
                </View>
            </View>
        </View>

    )
}


export default MainTitle;

const styles = StyleSheet.create({
    root: {
        marginTop: 20,
        margin: 5,
        // backgroundColor: 'light-grey',
        borderWidth: 1,
        borderColor: 'grey',
    },
    uppercont: {
        height: 230,
        flex: 1,
    },
    titlecont: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
    },
    titlestyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain'
    },
    belowcont: {
        marginTop: 20
    },
    gridcont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        display: 'flex'
    },
});