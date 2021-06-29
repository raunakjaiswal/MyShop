import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, SectionList, FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Homeitem from '../../../components/Homeitems';
import InsideFlatList from '../../../components/InsideFlatlist';


const HomeScreen = () => {


  const [homedata, sethomedata] = useState([])
  const [advertisment, setadvertisment] = useState([])
  useEffect(() => {
    firestore().collection('Homeadd').onSnapshot(docadd => {
      setadvertisment([])
      docadd.forEach((item) => {
        setadvertisment(oldad => [...oldad, item.data()])
      })
    }

    )
    firestore().collection('Home').onSnapshot(doc => {
      sethomedata([])
      doc.forEach((item) => {
        // console.log(item.id)
        console.log(item.data())
        sethomedata(oldarr => [...oldarr, item.data()])
      })
    })
    console.log(homedata)
  }, [])

  return (
    <View  >

      <View style={{ margin: 10 }}>
        <FlatList
          data={homedata}
          renderItem={({ item }) => <InsideFlatList data={item} />}
          keyExtractor={(item) => item.Path}
          ListHeaderComponent={<View>
            <ScrollView style={{ margin: 10, flexDirection: 'row' }} horizontal={true}>
              <FlatList
                data={advertisment}
                horizontal={true}
                renderItem={({ item }) =>

                (
                  <View style={{ height: 200, margin: 10, width: 360 }}>
                    <Image style={{ height: 200, width: 360 }} resizeMode={'cover'} source={{ uri: item.Image }} />
                  </View>)}
                keyExtractor={(item) => item.Image}
                showsHorizontalScrollIndicator={false}
              />


            </ScrollView>
          </View>}
        />

      </View>

    </View >
  );
};

export default HomeScreen;

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 300, height: 300
  }
})
