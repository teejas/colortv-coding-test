import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createStackNavigator } from '@react-navigation/stack';
import ListView from 'deprecated-react-native-listview';

import SearchView from './src/views/searchView.js';
import UserView from './src/views/userView.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchView} />
        <Stack.Screen name="User" component={UserView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
