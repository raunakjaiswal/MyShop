import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Text, Switch } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-elements/dist/helpers';
import auth from '@react-native-firebase/auth';

const Content = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView  {...props}>
                <View style={styles.drawercontent}>

                    <View style={styles.username}>
                        <View>
                            <Title style={styles.title}>{auth().currentUser?.displayName}</Title>
                        </View>
                    </View>


                    <Drawer.Section style={styles.drawerbtn}>
                        <DrawerItem
                            icon={() => (
                                <Entypo name="user" color="black" size={24} />
                            )}
                            label="Profile"
                            labelStyle={styles.labeltext}
                            onPress={() => { props.navigation.navigate('profile') }}
                        />


                        <DrawerItem
                            icon={() => (
                                <Ionicons name="paper-plane" color="black" size={24} />
                            )}
                            label="Orders"
                            labelStyle={styles.labeltext}
                            onPress={() => { props.navigation.navigate('orders') }}
                        />


                        <DrawerItem
                            icon={() => (
                                <Entypo name="info" color="black" size={24} />
                            )}
                            label="About uS"
                            labelStyle={styles.labeltext}
                            onPress={() => { props.navigation.navigate('aboutus') }}
                        />
                    </Drawer.Section>
                </View>


            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem
                    icon={() => (
                        <AntDesign name="verticleright" color="black" size={24} />
                    )}
                    label="sign out"
                    labelStyle={styles.labelsignout}
                    onPress={() => { auth().signOut(); }}
                />
            </Drawer.Section>
        </View>
    )
}
export default Content;

const styles = StyleSheet.create({
    drawercontent: {
        flex: 1
    },
    username: {
        marginTop: 15,
        marginLeft: 25,
        alignItems: 'flex-start'
    },
    drawerbtn: {
        marginTop: 50
    },
    title: {
        fontSize: 20
    },

    labeltext: {
        fontSize: 18
    },
    labelsignout: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});