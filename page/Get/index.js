import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

export default function GetUser(){
  const [data, setData] = useState([]);

  const getDataApi = async () => {
    try {
      let response = await fetch('https://reqres.in/api/users?page=2');
      let json = await response.json();
      setData(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDataApi();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 50, height: 50, marginRight: 10, borderRadius: 25}}
          source={{uri: item.avatar}}
        />
        <View>
          <Text style={styles.fitstname}>{item.first_name}</Text>
          <Text style={styles.lastname}>{item.last_name}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    padding: 10,
  },
  fitstname: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  last_name: {
    fontSize: 15,
  },
});

