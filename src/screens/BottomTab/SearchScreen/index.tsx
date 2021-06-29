import React, { Component } from 'react'
import { Text, View } from 'react-native'

const SearchScreen = () => {

    return (
        <View>
            <Text> search </Text>
        </View>
    )

}

export default SearchScreen;

// import React, { Component } from 'react'
// import { Text, View, SafeAreaView, ScrollView, Button, Image } from 'react-native'
// import firestore from '@react-native-firebase/firestore';


// const CategoriesScreen = () => {
//     firestore().collection('Products').doc('products').collection('Grocery').doc('grocery').onSnapshot((snap) => {
//         console.log(snap.data());
//     })
//     return (
//         <SafeAreaView >
//             <ScrollView>
//                 <View style={{ marginTop: 20, margin: 5, backgroundColor: 'light-grey', borderWidth: 1, borderColor: 'grey', }}>
//                     {/* // title */}
//                     <View style={{ height: 230, flex: 1, }}>
//                         <View style={{ justifyContent: 'center', alignItems: 'center', height: 30 }}>
//                             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Staples</Text>
//                         </View>

//                         <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/myonlineshop-9a82c.appspot.com/o/raunak.jpeg?alt=media&token=60a96e79-a3d1-4bde-ad4b-7b1751fa75dd' }}
//                             style={{ height: 200, width: '100%', resizeMode: 'contain' }}
//                         />

//                     </View>
//                     <View style={{ marginTop: 20 }}>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', display: 'flex' }}>
//                             <View style={{ height: 60, width: 110, backgroundColor: '#ffe6b3', margin: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#ffc34d' }}>
//                                 <Text style={{ fontSize: 16, fontWeight: 'normal' }}>Dals and pulses</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: '#ffe6b3', margin: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#ffc34d' }}>
//                                 <Text style={{ fontSize: 16 }}>Ghee and Oils</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: '#ffe6b3', margin: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#ffc34d' }}>
//                                 <Text style={{ fontSize: 16 }}>Atta and Flours</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: '#ffe6b3', margin: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#ffc34d' }}>
//                                 <Text style={{ fontSize: 16 }}>Masala and spices</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: '#ffe6b3', margin: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#ffc34d' }}>
//                                 <Text style={{ fontSize: 16 }}>Rice</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: '#ffe6b3', margin: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#ffc34d' }}>
//                                 <Text style={{ fontSize: 16 }}>Sugar and Salts</Text>
//                             </View>

//                         </View>
//                     </View>
//                 </View>


//                 <View style={{ marginTop: 20 }}>
//                     {/* // title */}
//                     <View style={{ height: 200, flex: 1 }}>
//                         <Text>Staples</Text>
//                         <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/myonlineshop-9a82c.appspot.com/o/raunak.jpeg?alt=media&token=60a96e79-a3d1-4bde-ad4b-7b1751fa75dd' }}
//                             style={{ height: 200, width: '100%', resizeMode: 'contain' }}
//                         />
//                     </View>
//                     <View style={{ marginTop: 20 }}>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', display: 'flex' }}>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>


//                 <View style={{ marginTop: 20 }}>
//                     {/* // title */}
//                     <View style={{ height: 200, flex: 1 }}>
//                         <Text>Staples</Text>
//                         <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/myonlineshop-9a82c.appspot.com/o/raunak.jpeg?alt=media&token=60a96e79-a3d1-4bde-ad4b-7b1751fa75dd' }}
//                             style={{ height: 200, width: '100%', resizeMode: 'contain' }}
//                         />
//                     </View>
//                     <View style={{ marginTop: 20 }}>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', display: 'flex' }}>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                             <View style={{ height: 60, width: 110, backgroundColor: 'grey', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text>Btn1</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )

// }

// export default CategoriesScreen;
