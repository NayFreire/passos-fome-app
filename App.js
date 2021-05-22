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
import FoodScreen from './src/components/pages/FoodScreen'
import ShoppingCartScreen from './src/components/pages/ShoppingCartScreen'
import PaymentScreen from './src/components/pages/PaymentScreen'
import ProfileScreen from './src/components/pages/ProfileScreen'

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
        <Stack.Screen name='FoodScreen' component={FoodScreen}/>
        <Stack.Screen name='ShoppingCartScreen' component={ShoppingCartScreen}/>
        <Stack.Screen name='PaymentScreen' component={PaymentScreen}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
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
