import { useContext, useEffect, useState } from 'react'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Picker } from '@react-native-picker/picker';
import UserContext from './UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

const Settings = () => {

    const { user, setUser } = useContext(UserContext);
    const [selectedClass, setSelectedClass] = useState(user.school_class);
    const [login, setLogin] = useState(user.login);
    const [password, setPassword] = useState(user.password);
    const navigation = useNavigation(); // Используем хук useNavigation для доступа к навигации

    const handelSaveUserData = () => {
        if (login && password && selectedClass) {
            const userData = { user_id: user.id, school_class: selectedClass, login, password };
            fetch('http://10.0.2.2:5000/api/user/update-user-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => {
                console.log('Response:', data.user);
                if (data.message === 'Пользователь с таким логином уже существует') {
                    alert('Такой логин уже занят');
                } else {
                    alert('Данные успешно сменены')
                    setUser(data.user)
                }
            }).catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        } else alert('Логин, пароль или класс не заполнены')
    }

    useEffect(() => {
        setSelectedClass(user.school_class);
        setLogin(user.login);
        setPassword(user.password)
    }, [user])

    const handleLoginChange = (login) => {
        setLogin(login);
    }

    const handlePasswordChange = (password) => {
        setPassword(password);
    }

    const handleExist = () => {
        AsyncStorage.removeItem('userData')
            .then(() => {
                // Выполните сброс стека навигации и переход на главный экран
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'SignIn' }] // Замените 'Main' на имя вашего главного экрана игры
                    })
                );
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handelSaveUserData}>
                    <Text style={styles.textSave}>Сохранить</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.enterData}>
                <Text style={styles.textSettings}>Настройки</Text>
                <View style={styles.fieldsEnterData}>
                    <View>
                        <Text style={styles.textLogin}>Логин</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleLoginChange} // Связываем с функцией обновления логина
                            value={login} // Устанавливаем значение из стейта
                        />
                    </View>
                    <View>
                        <Text style={styles.textLogin}>Пароль</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handlePasswordChange} // Связываем с функцией обновления пароля
                            value={password} // Устанавливаем значение из стейта
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.selectClass}>
                        <Text style={styles.textLogin}>Класс</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedClass}
                                style={[styles.picker]}
                                onValueChange={(itemValue, itemIndex) => setSelectedClass(itemValue)}
                            >
                                <Picker.Item label="1" value={1} />
                                <Picker.Item label="2" value={2} />
                                <Picker.Item label="3" value={3} />
                                <Picker.Item label="4" value={4} />
                            </Picker>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.buttonExitContainer}>
                <TouchableOpacity onPress={handleExist} style={styles.buttonExit}>
                    <Text style={styles.textSave}>Выйти</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        marginTop: 25,
        backgroundColor: '#FCF6D8'
    },
    buttonContainer: {
        height: '100%',
        alignSelf: 'flex-start', // Выравнивание кнопки влево
        justifyContent: 'flex-end'
    },
    button: {
        width: 120,
        height: 40,
        backgroundColor: '#FF7816',
        padding: 10,
        marginBottom: 40,
        marginLeft: 40,
        borderRadius: 5,
        alignItems: 'center'
    },
    textSettings: {
        fontSize: 40,
        fontWeight: '900',
        color: '#FF7816',
    },
    textSave: {
        color: '#FFFFFF',
        fontWeight: '700'
    },
    enterData: {
        width: 540,
        alignItems: 'center'
    },
    input: {
        width: 250,
        height: 35,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
    },
    textLogin: {
        fontSize: 18
    },
    fieldsEnterData: {
        marginTop: 30
    },
    selectClass: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center'
    },
    picker: {
        width: 90,
        borderWidth: 1
    },
    pickerContainer: {
        marginLeft: 20,
        borderWidth: 1
    },
    buttonExit: {
        width: 120,
        height: 40,
        backgroundColor: '#FF7816',
        marginBottom: 40,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonExitContainer: {
        height: '100%',
        justifyContent: 'flex-end'
    }
})

export default Settings
