import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Detail({route, navigation}) {
  const {item} = route.params;
  const [user, setUser] = useState({
    name: item.name,
    gender: item.gender,
    email: item.email,
    status: item.status,
  });

  const updateData = () => {
    var myHeader = new Headers();
    myHeader.append(
      'Authorization',
      'Bearer 408250f28b651ab21ead142bd317eb262d89c7764a64c314d77d781cd2c400f7',
    );

    myHeader.append('Content-Type', 'application/json');
    fetch('https://gorest.co.in/public/v1/users/' + item.id, {
      method: 'PATCH',
      headers: myHeader,
      body: JSON.stringify({
        name: user.name,
        gender: user.gender,
        email: user.email,
        status: user.status,
      }),
    })
      .then(response => {
        response.text();
        navigation.push('Get');
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const deleteData = () => {
    var myHeader = new Headers();
    myHeader.append(
      'Authorization',
      'Bearer 408250f28b651ab21ead142bd317eb262d89c7764a64c314d77d781cd2c400f7',
    );

    myHeader.append('Content-Type', 'application/json');
    fetch('https://gorest.co.in/public/v1/users/' + item.id, {
      method: 'DELETE',
      headers: myHeader,
      body: JSON.stringify({
        name: user.name,
        gender: user.gender,
        email: user.email,
        status: user.status,
      }),
    })
      .then(response => {
        response.text();
        navigation.push('Get');
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

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
    <View style={style.container}>
      <TextInput
        style={style.textInput}
        onChangeText={value => onChangeName(value)}
        placeholder={'Name'}
        value={user.name}
      />
      <TextInput
        style={style.textInput}
        onChangeText={value => onChangeGender(value)}
        placeholder={'Gender'}
        value={user.gender}
      />
      <TextInput
        style={style.textInput}
        onChangeText={value => onChangeEmail(value)}
        placeholder={'Email'}
        value={user.email}
      />
      <TextInput
        style={style.textInput}
        onChangeText={value => onChangeStatus(value)}
        placeholder={'Status'}
        value={user.status}
      />

      <View>
        <TouchableOpacity onPress={updateData}>
          <View style={style.btnSimpan}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Update</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteData}>
          <View style={style.btnHapus}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Hapus</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    margin: 5,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  btnHapus: {
    marginTop: 10,
    backgroundColor: '#FF4C29',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  btnSimpan: {
    marginTop: 10,
    backgroundColor: '#5D8233',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
});
