import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, ScrollView, Button, Image, StyleSheet, FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import MainTitle from '../../../components/Categories/maintitle';
import { Value } from 'react-native-reanimated';

const CategoriesScreen = () => {
    const [dat, setdat] = useState([])
    const ref = firestore().collection('Products').doc('products').collection('Grocery').doc('grocery');
    const [loadingcate, setloadingcate] = useState(true)
    useEffect(() => {
        ref.onSnapshot((value) => {
            // console.log(snap.data());
            setloadingcate(true);
            setdat(value.data() ? value.data().items : '');
            setloadingcate(false);
        })
        return () => {
            setdat([]); // This worked for me
        };

    }, [])
    if (loadingcate) {
        return (
            <View>
                <Text>
                    loading
                </Text>
            </View>
        )
    }

    // console.log(dat)
    return (
        <SafeAreaView >

            <View>
                <FlatList
                    data={dat}
                    renderItem={({ item, index }) => (
                        <MainTitle data={item} reff={ref} />
                    )}
                    keyExtractor={(item) => item}

                />
            </View>


        </SafeAreaView>
    )

}

export default CategoriesScreen;
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
    btn: {
        height: 60,
        width: 110,
        backgroundColor: '#ffe6b3',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#ffc34d'
    },
    btntext: {
        fontSize: 16,
        fontWeight: 'normal'
    }
});