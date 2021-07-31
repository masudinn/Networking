import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default function index({navigation}) {
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      let response = await fetch('https://gorest.co.in/public/v1/users');
      let json = await response.json();
      setUser(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const renderUser = ({item}) => {
    const onChangeName = value => {
      setUser({...user, name: value});
    };
    const onChangeGender = value => {
      setUser({...user, gender: value});
    };
    const onChangeEmail = value => {
      setUser({...user, email: value});
    };
    const onChangeStatus = value => {
      setUser({...user, status: value});
    };

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            item: item,
          })
        }>
        <View style={style.container}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={user}
        renderItem={renderUser}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FEFEFE',
  },
});
