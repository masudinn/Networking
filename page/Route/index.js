import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Get from '../Getdua';
import Post from '../post';
import Detail from '../Detail';
import Icon from 'react-native-ionicons';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

const Route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'blue'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Get"
        component={Get}
        options={({navigation, route}) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Post')}>
              <View style={style.btnadd}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({
  btnadd: {
    margin: 5,
    marginRight: 20,
    padding: 5,
  },
});

export default Route;
