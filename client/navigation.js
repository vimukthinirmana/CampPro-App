import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import StoreScreen from './screens/StoreScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Store" component={StoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
