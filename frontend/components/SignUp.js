import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import UserContext from './UserContext';

const SignUp = (props) => {

  const { user, setUser } = useContext(UserContext);
  const [selectedClass, setSelectedClass] = useState('1');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = () => {
    if (login && password) {
      if (password !== repeatPassword) alert('Пароли не совпадают');
      else {
        const user = { login, password, school_class: selectedClass };
        fetch('http://10.0.2.2:5000/api/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }).then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }).then(data => {
          console.log('Response:', data);
          if (data.message === 'Пользователь с таким логином уже существует') {
            alert('Такой логин уже занят');
          } else {
            setUser(data.user)
            // После успешной регистрации или входа, перенаправьте пользователя на главную страницу игры и выполните сброс стека навигации
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'Main' }] // Замените 'Main' на имя вашего главного экрана игры
            });
          }
        }).catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      }
    } else alert('Логин или пароль не введены');
  }

  const handleLoginChange = (login) => setLogin(login);
  const handlePasswordChange = (password) => setPassword(password);
  const handleRepeatPasswordChange = (repeatPassword) => setRepeatPassword(repeatPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Регистрация</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Придумай логин</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleLoginChange}
            value={login}
          />
        </View>
        <View style={styles.passwordContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Придумай пароль</Text>
            <TextInput
              style={styles.input}
              onChangeText={handlePasswordChange}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Повтори пароль</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleRepeatPasswordChange}
              value={repeatPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.classSelectionContainer}>
          <Text style={styles.classSelectionLabel}>Выбери свой класс</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedClass}
              style={[styles.picker, { alignItems: 'center' }]} // Добавляем стиль для выравнивания по центру
              onValueChange={(itemValue, itemIndex) => setSelectedClass(itemValue)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
            </Picker>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#FCF6D8'
  },
  header: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FF7816',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 10,
    marginLeft: 30
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row'
  },
  inputsContainer: {
    alignItems: 'start',
    width: '100%'
  },
  classSelectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  classSelectionLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  pickerContainer: {
    width: 90,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center', // Добавляем стиль для выравнивания по центру
  },
  picker: {
    width: 90,
    height: 40,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#FF7816',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 15,
    width: 250,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUp;
