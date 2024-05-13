import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Accept from '../assets/game/accept.png'
import Number_0 from '../assets/game/number_0.png'
import Number_1 from '../assets/game/number_1.png'
import Number_2 from '../assets/game/number_2.png'
import Number_3 from '../assets/game/number_3.png'
import Number_4 from '../assets/game/number_4.png'
import Number_5 from '../assets/game/number_5.png'
import Number_6 from '../assets/game/number_6.png'
import Number_7 from '../assets/game/number_7.png'
import Number_8 from '../assets/game/number_8.png'
import Number_9 from '../assets/game/number_9.png'
import Remove from '../assets/game/remove.png'
import Timer from '../assets/game/timer.png'
import UserContext from './UserContext'

const Game = () => {

    const {user, setUser} = useContext(UserContext)

    // Установка изначальных чисел, знака, и решения
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [sign, setSign] = useState(null);
    const [solution, setSolution] = useState(null);

    const [enteredNumber, setEntederNumber] = useState('')
    const [schoolClass, setSchoolClass] = useState(user.school_class);
    const [counter, setCounter] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(null);

    const handleAcceptAnswer = (seconds, is_correct) => {
        const userData = {seconds, is_correct, user_id: user.id};
        fetch('http://10.0.2.2:5000/api/user/accept-user-answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log('Response:', data.user);
            setUser(data.user); // Перезаписываем user'а
        }).catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    function generateDivisionPair() {
        let divisor = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 10

        // Функция для проверки, является ли число простым
        function isPrime(num) {
            if (num < 2) return false; // Числа меньше 2 не являются простыми
            for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
                if (num % i === 0) return true; // Если число делится на любое число от 2 до sqrt(num), оно простое
            return false;
        }

        // Создаем пустой массив для хранения простых чисел
        let primes = [];

        // Проходим через все числа от 1 до 100
        for (let i = 1; i <= 100; i++) {
            // Если число является простым, добавляем его в массив
            if (isPrime(i)) {
                primes.push(i);
            }
        }

        // Генерируем случайный индекс в пределах длины массива primes
        let randomIndex = Math.floor(Math.random() * primes.length);

        // Получаем случайное простое число из массива primes
        let dividend = primes[randomIndex];

        console.log(`Выбранное простое число: ${dividend}`);


        // Проверяем, делится ли делимое на делитель без остатка
        while (dividend % divisor !== 0) {
            divisor = Math.floor(Math.random() * 10) + 1; // Если нет, генерируем новый делитель
        }

        return { dividend, divisor }; // Возвращаем пару чисел
    }

    const [color, setColor] = useState('#F7AA2E');

    const [coins, setCoins] = useState(user.coins); // Пример количества монет
    const [xp, setXP] = useState(user.xp); // Пример опыта


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        setSchoolClass(user.school_class);
        setXP(user.xp)
        setCoins(user.coins)
        if(!num1 || !num2 || !solution || !sign) createExample();
        setSeconds(0);
        const id = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        setTimerId(id); // Сохраняем ID интервала в состоянии
        return () => clearInterval(id);
    }, [user, counter]);

    const createExample = () => {
        switch (schoolClass) {
            case 1:
                const firstNumber1 = Math.floor(Math.random() * 11);
                setNum1(firstNumber1);
                const secondNumber1 = Math.floor(Math.random() * (firstNumber1 + 1));
                setNum2(secondNumber1);
                const operators1 = ['+', '-'];
                const randomIndex1 = Math.floor(Math.random() * operators1.length);
                setSign(operators1[randomIndex1]);
                if (operators1[randomIndex1] === '+') {
                    setSolution((firstNumber1 + secondNumber1).toString());
                } else if (operators1[randomIndex1] === '-') {
                    setSolution((firstNumber1 - secondNumber1).toString());
                }
                break;
            case 2:
                const firstNumber2 = Math.floor(Math.random() * 101);
                setNum1(firstNumber2);
                const secondNumber2 = Math.floor(Math.random() * (firstNumber2 + 1));
                setNum2(secondNumber2);
                const operators2 = ['+', '-'];
                const randomIndex2 = Math.floor(Math.random() * operators2.length);
                setSign(operators2[randomIndex2]);
                if (operators2[randomIndex2] === '+') {
                    setSolution((firstNumber2 + secondNumber2).toString());
                } else if (operators2[randomIndex2] === '-') {
                    setSolution((firstNumber2 - secondNumber2).toString());
                }
                break;
            case 3:
                const operators3 = ['+', '-', '×', '/'];
                const randomIndex3 = Math.floor(Math.random() * operators3.length);
                setSign(operators3[randomIndex3])
                if (operators3[randomIndex3] === '+' || operators3[randomIndex3] === '-') {
                    const firstNumber3 = Math.floor(Math.random() * 101);
                    setNum1(firstNumber3);
                    const secondNumber3 = Math.floor(Math.random() * (firstNumber3 + 1));
                    setNum2(secondNumber3);
                    if (operators3[randomIndex3] === '+') setSolution((firstNumber3 + secondNumber3).toString());
                    if (operators3[randomIndex3] === '-') setSolution((firstNumber3 - secondNumber3).toString());
                } else if (operators3[randomIndex3] === '×') {
                    const firstNumber3 = Math.floor(Math.random() * 11);
                    setNum1(firstNumber3);
                    const secondNumber3 = Math.floor(Math.random() * 11);
                    setNum2(secondNumber3);
                    setSolution((firstNumber3 * secondNumber3).toString());
                } else if (operators3[randomIndex3] === '/') {
                    const divisionPair = generateDivisionPair();
                    const firstNumber3 = divisionPair.dividend;
                    setNum1(firstNumber3);
                    const secondNumber3 = divisionPair.divisor;
                    setNum2(secondNumber3);
                    setSolution((firstNumber3 / secondNumber3).toString())
                }
                break;
            case 4:
                const operators4 = ['+', '-', '×', '/'];
                const randomIndex4 = Math.floor(Math.random() * operators4.length);
                setSign(operators4[randomIndex4])
                if (operators4[randomIndex4] === '+' || operators4[randomIndex4] === '-') {
                    const firstNumber4 = Math.floor(Math.random() * 1001);
                    setNum1(firstNumber4);
                    const secondNumber4 = Math.floor(Math.random() * (firstNumber4 + 1));
                    setNum2(secondNumber4);
                    if (operators4[randomIndex4] === '+') setSolution((firstNumber4 + secondNumber4).toString());
                    if (operators4[randomIndex4] === '-') setSolution((firstNumber4 - secondNumber4).toString());
                } else if (operators4[randomIndex4] === '×') {
                    const firstNumber4 = Math.floor(Math.random() * 21);
                    setNum1(firstNumber4);
                    const secondNumber4 = Math.floor(Math.random() * 21);
                    setNum2(secondNumber4);
                    setSolution((firstNumber4 * secondNumber4).toString());
                } else if (operators4[randomIndex4] === '/') {
                    const divisionPair = generateDivisionPair();
                    const firstNumber4 = divisionPair.dividend;
                    setNum1(firstNumber4);
                    const secondNumber4 = divisionPair.divisor;
                    setNum2(secondNumber4);
                    setSolution((firstNumber4 / secondNumber4).toString())
                }
                break;
        }
    }

    const handlePressAccept = () => {
        if(enteredNumber != ''){
            clearInterval(timerId); // Останавливаем таймер по его ID
            if (solution === enteredNumber) {
                setColor('green')
                setTimeout(() => {
                    createExample();
                    handleAcceptAnswer(seconds, true)
                    setColor('#F7AA2E')
                    setEntederNumber('');
                    setCounter(counter + 1);
                }, 2000);
            } else {
                setColor('red');
                setTimeout(() => {
                    createExample();
                    handleAcceptAnswer(seconds, false)
                    setColor('#F7AA2E')
                    setEntederNumber('');
                    setCounter(counter + 1);
                }, 2000);
            };
        } else {
            return;
        }
        
    }

    const inputNumber = (number) => {
        switch (number) {
            case Number_1:
                setEntederNumber(enteredNumber + '1');
                break;
            case Number_2:
                setEntederNumber(enteredNumber + '2');
                break;
            case Number_3:
                setEntederNumber(enteredNumber + '3');
                break;
            case Number_4:
                setEntederNumber(enteredNumber + '4');
                break;
            case Number_5:
                setEntederNumber(enteredNumber + '5');
                break;
            case Number_6:
                setEntederNumber(enteredNumber + '6');
                break;
            case Number_7:
                setEntederNumber(enteredNumber + '7');
                break;
            case Number_8:
                setEntederNumber(enteredNumber + '8');
                break;
            case Number_9:
                setEntederNumber(enteredNumber + '9');
                break;
            case Number_0:
                setEntederNumber(enteredNumber + '0');
                break;
            case Remove:
                setEntederNumber(enteredNumber.slice(0, -1));
                break;
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.timer}>
                    <Image source={Timer} style={{ width: 60, height: 60 }}></Image>
                    <Text style={{ fontSize: 40, fontWeight: '300' }}>{formatTime(seconds)}</Text>
                </View>
                <View style={styles.coinsXPContainer}>
                    <View style={styles.coins}>
                        <Text style={styles.textCX}>{coins}</Text>
                    </View>
                    <Image source={require('../assets/VA_coin.png')} style={styles.iconCoin} />
                    <View style={styles.xp}>
                        <Text style={styles.textCX}>{xp}</Text>
                    </View>
                    <Image source={require('../assets/xp.png')} style={styles.iconXP} />
                </View>
            </View>
            <View style={styles.viewExample}>
                <Text style={{ color: "#F7AA2E", fontSize: 100, fontWeight: '700' }}>
                    <Text>{num1} </Text>
                    <Text>{sign} </Text>
                    <Text>{num2} </Text>
                    <Text>= </Text>
                    {enteredNumber ? (
                        <Text style={{ textDecorationLine: 'underline', color: color }}>{enteredNumber}</Text>
                    ) : (
                        <Text style={{ color: color }}>__</Text>
                    )}

                </Text>
            </View>
            <View style={styles.viewButtons}>
                <TouchableOpacity onPress={() => inputNumber(Number_1)}>
                    <Image source={Number_1} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_2)}>
                    <Image source={Number_2} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_3)}>
                    <Image source={Number_3} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_4)}>
                    <Image source={Number_4} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_5)}>
                    <Image source={Number_5} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_6)}>
                    <Image source={Number_6} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_7)}>
                    <Image source={Number_7} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_8)}>
                    <Image source={Number_8} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_9)}>
                    <Image source={Number_9} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Number_0)}>
                    <Image source={Number_0} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => inputNumber(Remove)}>
                    <Image source={Remove} style={{ width: 119, height: 60, marginLeft: 10 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressAccept}>
                    <Image source={Accept} style={{ width: 60, height: 60, marginLeft: 10 }}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: '#FCF6D8',
        marginTop: 25
    },
    header: {
        flexDirection: 'row',
        height: 120
    },
    timer: {
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10
    },
    coinsXPContainer: {
        position: 'absolute',
        top: 20,
        right: 40,
        flexDirection: 'row',
        gap: 70,
    },
    coins: {
        flexDirection: 'row',
        borderWidth: .5,
        borderColor: 'black',
        width: 130,
        justifyContent: 'center'
    },
    xp: {
        flexDirection: 'row',
        borderWidth: .5,
        borderColor: 'black',
        width: 130,
        justifyContent: 'center'
    },
    iconCoin: {
        position: 'absolute',
        top: -10,
        right: 310,
        width: 46,
        height: 47,
    },
    iconXP: {
        position: 'absolute',
        top: -14,
        right: 103,
        width: 51,
        height: 51,
    },
    textCX: {
        fontSize: 18,
    },
    viewExample: {
        width: '100%',
        alignItems: 'center'
    },
    viewButtons: {
        flexDirection: 'row',
        marginTop: 50
    },
    imageButtons: {
        width: 55,
        height: 55,
        marginLeft: 10
    }
});

export default Game