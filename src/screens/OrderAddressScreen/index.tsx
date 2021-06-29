import React, { useEffect, useState } from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';

const OrderAddressScreen = () => {
    const route = useRoute();
    const [statelist, setstatelist] = useState([]);
    const [loadingdata, setloadingdata] = useState<boolean>(true)
    const [Delivery, SetDeliveryAddress] = useState([])
    const reff = firestore().collection('customers').doc(`${auth().currentUser?.uid}`).collection('Cart').doc('cart');
    useEffect(() => {
        // navigation.setOptions({
        //     tabBarVisible: false,
        // });
        setloadingdata(true)
        firestore()
            .collection('State')
            .doc('statename')
            .onSnapshot(sna => {
                setstatelist(sna.data().statename);
            })
        reff.collection('OrderAddress').doc('address').onSnapshot((snap) => {
            SetDeliveryAddress(snap.data());
            console.log(snap.data())
        })
        setloadingdata(false)
        return () => {
            SetDeliveryAddress([]); // This worked for me
            setstatelist([])
        };
    }, [])

    const savechanges = () => {
        setloadingdata(true)
        reff.collection('OrderAddress').doc('address').update({
            BuildingName: Delivery.BuildingName,
            City: Delivery.City,
            Name: Delivery.Name,
            PhoneNumber: Delivery.PhoneNumber,
            Pincode: Delivery.Pincode,
            RoadName: Delivery.RoadName,
            State: Delivery.State
        }).then(() => {
            setloadingdata(false)
        })

    }
    const deliveryhere = () => {
        setloadingdata(true)
        // let today = new Date().toLocaleDateString()
        let today = new Date().toISOString().slice(0, 10)
        console.log('deleiver')
        console.log(today)
        // console.log(route.params.Items[0])
        // const Orderitem = {};
        const Itemss: any[] = [];
        const ref = route.params.Items;

        ref.forEach(item => {
            Itemss.push(item.data())
            // console.log(item.data())
        });
        const Orderitem = {
            Items: Itemss,
            Address: Delivery,
            user_id: auth().currentUser?.uid,
            Total_price: route.params.TotalPrice,
            Date: today
        }
        // Orderitem({ TotalPrice: route.params.TotalPrice })
        // Orderitem.push(Itemss)
        // console.log(Orderitem)
        // console.log(Delivery)
        // console.log(auth().currentUser?.uid)
        const orederreff = firestore().collection('Orders').doc('orders').collection(`${today}`).doc(`${auth().currentUser?.uid}`);
        orederreff.set({
            Orderitem,
            Status: {
                Ordered: true,
                Packed: false,
                Shipped: false,
                Delivered: false,
                Cancel: false
            }
        })
            .then(() => {

                firestore().collection('customers').doc(`${auth().currentUser?.uid}`).collection('Orders').doc(`${today}`).set({
                    path: orederreff.path,
                    Date: today
                })
            })
            .then(async () => {
                const pq = reff.collection('items').get();
                try {
                    (await pq).forEach(doc => {
                        reff.collection('items').doc(doc.id).delete();
                    });
                } catch (error) {
                    console.log("message" + error.message)
                }

                // reff.collection('items').onSnapshot(snap => {
                //     snap.forEach(doc => {
                //         reff.collection('items').doc(doc.id).delete();
                //     })
                // })
            })
            .then(() => {
                console.log('deleted')
                setloadingdata(false)
            })


    }
    if (loadingdata) {
        return (
            <View>
                <Text>loading</Text>
            </View>
        )
    }
    return (

        <ScrollView>
            <KeyboardAvoidingView>
                <View>
                    <Text>Name</Text>
                    <Input

                        inputContainerStyle={{
                            borderWidth: 1,
                            borderColor: '#4d4d4d',
                            marginTop: 10,
                        }}
                        style={{ color: 'black' }}
                        placeholder="Full Name"
                        inputStyle={{ color: 'white' }}
                        value={Delivery.Name}
                        onChangeText={text => {
                            SetDeliveryAddress({ ...Delivery, Name: text })
                        }}
                    />
                </View>

                <View>
                    <Text>Phone Number</Text>
                    <Input

                        inputContainerStyle={{
                            borderWidth: 1,
                            borderColor: '#4d4d4d',
                            marginTop: 10,
                        }}
                        style={{ color: 'black' }}
                        placeholder="Phone Number"
                        keyboardType={'number-pad'}
                        inputStyle={{ color: 'Black' }}
                        value={Delivery.PhoneNumber}

                        onChangeText={text => {
                            SetDeliveryAddress({ ...Delivery, PhoneNumber: text })
                        }}
                    />
                </View>

                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
                        <View style={{ flex: 1, marginRight: 10 }}>
                            <Text>State</Text>
                            <View style={styles.container}>
                                <Picker
                                    selectedValue={Delivery.State}
                                    style={{ height: 50, width: 140, color: 'black' }}
                                    mode={'dialog'}
                                    onValueChange={(itemValue, itemIndex) => {
                                        SetDeliveryAddress({ ...Delivery, State: itemValue })
                                    }
                                    }>
                                    <Picker.Item label="select" value="0" />
                                    {statelist.map((val, index) => (
                                        <Picker.Item key={index} label={val} value={val} />
                                    ))}
                                </Picker>
                            </View>

                        </View>

                        <View style={{ flex: 2, marginLeft: 40 }}>
                            <Text>City</Text>
                            <Input

                                inputContainerStyle={{
                                    borderWidth: 1,
                                    borderColor: '#4d4d4d',
                                    marginTop: 10,
                                }}
                                style={{ color: 'black' }}
                                placeholder="Full Name"
                                inputStyle={{ color: 'white' }}
                                value={Delivery.City}
                                onChangeText={text => {
                                    SetDeliveryAddress({ ...Delivery, City: text })
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Building Name/House  No.</Text>
                    <Input

                        inputContainerStyle={{
                            borderWidth: 1,
                            borderColor: '#4d4d4d',
                            marginTop: 10,
                        }}
                        style={{ color: 'black' }}
                        placeholder="Full Name"
                        inputStyle={{ color: 'white' }}
                        value={Delivery.BuildingName}
                        onChangeText={text => {
                            SetDeliveryAddress({ ...Delivery, BuildingName: text })
                        }}
                    />
                </View>

                <View>
                    <Text>Road name/colony name</Text>
                    <Input

                        inputContainerStyle={{
                            borderWidth: 1,
                            borderColor: '#4d4d4d',
                            marginTop: 10,
                        }}
                        style={{ color: 'black' }}
                        placeholder="Full Name"
                        inputStyle={{ color: 'white' }}
                        value={Delivery.RoadName}
                        onChangeText={text => {
                            SetDeliveryAddress({ ...Delivery, RoadName: text })
                        }}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        < TouchableOpacity onPress={savechanges} style={{ height: 50, flex: 0.5, backgroundColor: 'orange', marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 18 }}>save changes</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={deliveryhere} style={{ height: 50, flex: 0.5, backgroundColor: 'green', marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 18 }}>Delivery Here</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



            </KeyboardAvoidingView >
        </ScrollView >

    )

}

export default OrderAddressScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // paddingTop: 40,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4d4d4d',
        height: 50,
        width: 140,
        flexDirection: 'row',

    },
});