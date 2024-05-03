import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Авторизация</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Логин</Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registerText}>Нет аккаунта?  Зарегистрироваться</Text>
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
