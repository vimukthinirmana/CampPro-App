import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import { shopStore } from './shopStore';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider shopStore= {shopStore}>
    <Navigation/>
    </Provider>
    
  );
}


