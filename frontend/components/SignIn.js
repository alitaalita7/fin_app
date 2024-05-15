import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from './UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';


const SignIn = (props) => {

  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation(); // Используем хук useNavigation для доступа к навигации

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (login) => setLogin(login);
  const handlePasswordChange = (password) => setPassword(password);

  const handleLogIn = () => {
    const user = { login, password };
    fetch('http://10.0.2.2:5000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => {
      if (!response.ok) {
        alert('неправильный логин или пароль');
        return;
      }
      return response.json();
    }).then(data => {
      console.log('Response:', data.user);
      setUser(data.user)
      // После успешной регистрации или входа, перенаправьте пользователя на главную страницу игры и выполните сброс стека навигации
      AsyncStorage.setItem('userData', JSON.stringify(data.user))
        .then(() => {
          // Выполните сброс стека навигации и переход на главный экран
          navigation.navigate('Main')
        })
    }).catch(error => {

    });
  }

  const goToSignUp = () => {
    navigation.navigate('SignUp'); // Переход на страницу SignUp
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Авторизация</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Логин</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleLoginChange}
          value={login}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput
          style={styles.input}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogIn}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSignUp}>
        <Text style={styles.registerText}>Нет аккаунта? Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FCF6D8',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 20,
    color: '#FF7816',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: 300,
  },
  button: {
    backgroundColor: '#FF7816',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 15,
    width: 160,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerText: {
    marginTop: 15,
    fontSize: 16,
    color: '#FF7816',
    textDecorationLine: 'none',
  },
});

export default SignIn;
