import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserContext from './components/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Achievements from './components/Achievements';
import Settings from './components/Settings';
import Goals from './components/Goals'
import Rules from './components/Rules';
import Game from './components/Game';
import Main from './components/Main';

export default function App() {

  const Stack = createStackNavigator();

  const [user, setUser] = useState(null);

  const [userExists, setUserExists] = useState(false);

  useLayoutEffect(() => {
    // Проверяем наличие данных пользователя в AsyncStorage
    AsyncStorage.getItem('userData').then(userData => {
      console.log(userData);
      if (userData) {
        setUser(JSON.parse(userData))
        setUserExists(true);
      }
    }).catch(error => {
      console.error('Ошибка при получении данных пользователя из AsyncStorage:', error);
    });
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName={
            userExists ? "Main" : "SignIn"
          } >
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
            <Stack.Screen name="Rules" component={Rules} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name="Goals" component={Goals} options={{ headerShown: false }} />
            <Stack.Screen name="Achievements" component={Achievements} options={{ headerShown: false }} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
