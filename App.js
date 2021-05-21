import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import StartScreen from './src/components/pages/StartScreen'
import SignInScreen from './src/components/pages/SignInScreen'
import SignUpScreen from './src/components/pages/SignUpScreen'
import HomeScreen from './src/components/pages/HomeScreen'

let Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      <Stack.Navigator>
        <Stack.Screen name='StartScreen' component={StartScreen}/>
        <Stack.Screen name='SignInScreen' component={SignInScreen}/>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
