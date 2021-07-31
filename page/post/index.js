import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Post() {
  const [user, setUser] = useState({
    name: '',
    gender: '',
    email: '',
    status: '',
  });
  const [loading, setLoading] = useState(false);

  const saveData = () => {
    setLoading(true);
    var myHeader = new Headers();
    myHeader.append(
      'Authorization',
      'Bearer 408250f28b651ab21ead142bd317eb262d89c7764a64c314d77d781cd2c400f7',
    );

    myHeader.append('Content-Type', 'application/json');
    fetch('https://gorest.co.in/public/v1/users', {
      method: 'POST',
      headers: myHeader,
      body: JSON.stringify({
        name: user.name,
        gender: user.gender,
        email: user.email,
        status: user.status,
      }),
    })
      .then(response => {
        setLoading(false);
        response.text();
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
    <View style={styling.container}>
      <Text style={{textAlign: 'center'}}>Page Post</Text>

      <TextInput
        style={styling.textInput}
        onChangeText={value => onChangeName(value)}
        placeholder={'Name'}
      />
      <TextInput
        style={styling.textInput}
        onChangeText={value => onChangeGender(value)}
        placeholder={'Gender'}
      />
      <TextInput
        style={styling.textInput}
        onChangeText={value => onChangeEmail(value)}
        placeholder={'Email'}
      />
      <TextInput
        style={styling.textInput}
        onChangeText={value => onChangeStatus(value)}
        placeholder={'Status'}
      />

      <TouchableOpacity onPress={saveData}>
        <View style={styling.btnSimpan}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>
            {loading ? 'menyimpan' : 'Simpan'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styling = StyleSheet.create({
  container: {
    margin: 10,
  },
  textInput: {
    margin: 5,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  btnSimpan: {
    marginTop: 10,
    backgroundColor: '#FF4C29',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
});
