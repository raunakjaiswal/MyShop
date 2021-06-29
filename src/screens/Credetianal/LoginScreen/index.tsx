import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [hide, sethide] = useState<boolean>(true);
  const [signinloading, setsigninloading] = useState<boolean>(false);

  console.log(email);
  console.log(password);
  const signinfunction = () => {
    setsigninloading(!signinloading);
    auth().signInWithEmailAndPassword(email, password).then(user => {
      setsigninloading(!signinloading);
    }).catch(err => {
      console.log(err.message);
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={'height'}
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View style={styles.root}>
        <View style={styles.cont}>
          <Text style={styles.text}> Enter email</Text>
          <Input
            inputContainerStyle={styles.inputconatinerstyle}
            style={styles.input}
            keyboardType="email-address"
            placeholder="Enter email"
            value={email}
            onChangeText={text => {
              setemail(text);
            }}
          />
        </View>

        <View style={styles.cont}>
          <Text style={styles.text}> Enter Password</Text>
          <Input
            inputContainerStyle={styles.inputconatinerstyle}
            style={styles.input}
            placeholder="password"
            secureTextEntry={hide}
            value={password}
            onChangeText={text => {
              setpassword(text);
            }}
            rightIcon={
              <TouchableOpacity
                onPress={() => {
                  sethide(!hide);
                }}>
                {hide ? (
                  <FontAwesome5 name="eye-slash" size={24} color="white" />
                ) : (
                  <FontAwesome5 name="eye" size={24} color="blue" />
                )}
              </TouchableOpacity>
            }
          />
        </View>

        <View style={styles.submit}>
          <Button
            buttonStyle={styles.btn}
            loading={signinloading}
            titleStyle={{ color: 'white' }}
            title="sign in"
            onPress={
              signinfunction

            }
          />
        </View>
        <View style={styles.submit}>
          <Button
            title="sign up"
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputconatinerstyle: {
    borderWidth: 1,
    borderColor: '#4d4d4d',
    marginTop: 10,
  },
  cont: {
    flexDirection: 'column',
    width: 300,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  input: {
    // width: 300,
  },
  submit: {
    width: 200,
    margin: 10,
  },
  btn: {
    backgroundColor: '#4d4d4d',
  },
});
