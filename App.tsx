import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlashMessage from "react-native-flash-message";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/BottomTab/HomeScreen';

import LoginScreen from './src/screens/Credetianal/LoginScreen';
import RegisterScreen from './src/screens/Credetianal/RegisterScreen';
import firestore from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import HomeStack from './src/router/CredentialRoute';
import HomeRoute from './src/router/HomeRoute';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    async function bootstrap() {
      await firestore().settings({
        persistence: false, // disable offline persistence
      });
    }
    bootstrap();

    auth().onAuthStateChanged(val => {
      setUser(val);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  if (loading) return null;

  // console.log(user);
  if (user == null) {
    // console.log('yres');
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HomeStack />

      </SafeAreaView>
    );
  }
  // console.log('yre');
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlashMessage />
      <HomeRoute />

    </SafeAreaView>
  );
};

export default App;
