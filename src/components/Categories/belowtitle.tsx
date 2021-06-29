import React, { Component } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const BelowTitle = (props) => {

    const navigation = useNavigation();
    const funn = () => {
        navigation.navigate('listitem', { id: props.itemss, ref: props.reff });
    }
    return (
        <Pressable onPress={funn}>
            <View style={styles.btn}>
                <Text style={styles.btntext}>{props.itemss}</Text>
            </View>
        </Pressable>

    )

}

export default BelowTitle;

const styles = StyleSheet.create({
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