import React from 'react';
import {View} from 'react-native';
import Stack from './page/Route';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
