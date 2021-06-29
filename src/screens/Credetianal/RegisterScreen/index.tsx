import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import State from '../../../data/state';
import firestore from '@react-native-firebase/firestore';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {
  const [fullname, setfullname] = useState('');
  const [password, setpassword] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [emailid, setemaild] = useState('');
  const [Adress, setAddress] = useState('');
  // const [state, setstate] = useState('');
  // const [city, setcity] = useState('');
  const [pincode, setpincode] = useState('');
  const [selectedValuestate, setSelectedValuestate] =
    useState<String>('select');
  const [selectedValuecity, setSelectedValuecity] = useState('select');
  const [cityenabled, setcityenabled] = useState<boolean>(false);
  const [stateenabled, setstateenabled] = useState<boolean>(false);

  const [citylist, setcitylist] = useState([]);
  const [statelist, setstatelist] = useState([]);

  const checkstate = () => {
    setcityenabled(false);
    setcitylist([]);
    if (selectedValuestate == '0') {
      console.warn('enter first state');
    } else {
      firestore()
        .collection('State')
        .doc('stateid')
        .collection(`${selectedValuestate}`)
        .onSnapshot(snap => {
          snap.forEach(doc => {
            setcitylist(doc.data().City);
          });
        }),
        setcityenabled(true);
    }
  };

  const pressedstate = () => {
    setcityenabled(false);
    setstateenabled(false);
    setcitylist([]);
    firestore()
      .collection('State')
      .doc('statename')
      .onSnapshot(snap => {
        setstatelist(snap.data().statename);
      }),
      setstateenabled(true);
  };

  const registerAccount = () => {
    auth()
      .createUserWithEmailAndPassword(emailid, password)
      .then(info => {
        info.user
          .updateProfile({
            displayName: `${fullname}`,
          })
          .then(inf => {
            console.log(info.user.uid);
            firestore()
              .collection('customers')
              .doc(`${info.user.uid}`)
              .collection('Address')
              .doc('address')
              .set({
                UserName: fullname,
                PhoneNumber: phonenumber,
                UserId: info.user.uid,
                EmailId: emailid,
                Address: Adress,
                State: selectedValuestate,
                City: selectedValuecity,
                Pincode: pincode,
              });
          });
      })
      .catch(error => console.log(error.message));
    // console.log(fullname);
    // console.log(phonenumber);
    // console.log(emailid);
    // console.log(Adress);
    // console.log(selectedValuestate);
    // console.log(selectedValuecity);
    // console.log(pincode);
    // console.log(password);
  };
  return (
    <KeyboardAvoidingView
      behavior={'height'}
      style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.cont}>
          <Text style={styles.text}>Enter Full Name</Text>
          <Input
            inputContainerStyle={styles.inputconatinerstyle}
            placeholder="Full Name"
            inputStyle={{color: 'white'}}
            value={fullname}
            onChangeText={text => {
              setfullname(text);
            }}
          />
        </View>

        <View style={styles.cont}>
          <Text style={styles.text}>Enter Passwoed</Text>
          <Input
            inputContainerStyle={styles.inputconatinerstyle}
            placeholder="password"
            inputStyle={{color: 'white'}}
            value={password}
            onChangeText={text => {
              setpassword(text);
            }}
          />
        </View>

        <View style={styles.cont}>
          <Text style={styles.text}>Enter Phone Number</Text>
          <Input
            inputContainerStyle={styles.inputconatinerstyle}
            placeholder="phone number"
            inputStyle={{color: 'white'}}
            keyboardType={'number-pad'}
            value={phonenumber}
            onChangeText={text => {
              setphonenumber(text);
            }}
          />
        </View>

        <View style={styles.cont}>
          <Text style={styles.text}>Enter Email id</Text>
          <Input
            inputContainerStyle={styles.inputconatinerstyle}
            placeholder="email id"
            inputStyle={{color: 'white'}}
            value={emailid}
            onChangeText={text => {
              setemaild(text);
            }}
          />
        </View>

        <View style={styles.cont}>
          <Text style={styles.text}>Enter Address</Text>
          <Input
            inputContainerStyle={styles.inputconatinerstyle}
            placeholder="Address"
            inputStyle={{color: 'white'}}
            value={Adress}
            onChangeText={text => {
              setAddress(text);
            }}
          />
        </View>

        <View style={styles.statecity}>
          <View style={styles.sc}>
            <Text style={styles.text}>state</Text>

            <TouchableOpacity onPress={pressedstate}>
              <View style={styles.container}>
                <Picker
                  selectedValue={selectedValuestate}
                  style={{height: 50, width: 140, color: 'white'}}
                  mode={'dialog'}
                  enabled={stateenabled}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValuestate(itemValue)
                  }>
                  <Picker.Item label="select" value="0" />
                  {statelist.map((val, index) => (
                    <Picker.Item key={index} label={val} value={val} />
                  ))}
                </Picker>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.sc}>
            <Text style={styles.text}>city</Text>
            <Pressable onPress={checkstate}>
              <View style={styles.container}>
                <Picker
                  selectedValue={selectedValuecity}
                  enabled={cityenabled}
                  style={{height: 50, width: 140, color: 'white'}}
                  mode={'dialog'}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValuecity(itemValue)
                  }>
                  <Picker.Item label="select" value="0" />
                  {citylist.map((val, index) => (
                    <Picker.Item key={index} label={val} value={val} />
                  ))}
                </Picker>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={styles.text}>Enter Pincode</Text>
          <Input
            inputContainerStyle={styles.inputconatinerstyle}
            placeholder="Pincode"
            value={pincode}
            inputStyle={{color: 'white'}}
            keyboardType="number-pad"
            onChangeText={text => {
              setpincode(text);
            }}
          />
        </View>

        <View style={{height: 50}}>
          <Button title="Register" onPress={registerAccount} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  root: {
    margin: 50,
  },
  statecity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  cont: {
    // marginTop: 5,
    flexDirection: 'column',
    width: 300,
  },
  sc: {
    width: 140,
  },
  inputconatinerstyle: {
    borderWidth: 1,
    borderColor: '#4d4d4d',
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
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
