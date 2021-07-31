import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Get from './page/Get';
import Post from './page/post';

const App = () => {
  return (
    <View>
      {/* <Get /> */}
      <Post />
    </View>
  );
};

export default App;
