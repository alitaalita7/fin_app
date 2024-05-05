import React, { useEffect, useState } from 'react'
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
import VA from '../assets/game/VA_coin.png'
import XP from '../assets/game/xp.png'

const Game = () => {

    // Установка изначальных чисел, знака, и решения
    const firstNumber = Math.floor(Math.random() * 11)
    const [num1, setNum1] = useState(firstNumber);
    const secondNumber = Math.floor(Math.random() * (firstNumber + 1));
    const [num2, setNum2] = useState(secondNumber);
    const operators = ['+', '-'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const [sign, setSign] = useState(operators[randomIndex]);
    let sol = '';
    if (operators[randomIndex] === '+') {
        sol = (firstNumber + secondNumber).toString()  
    } else if (operators[randomIndex] === '-') {
        sol = (firstNumber - secondNumber).toString()
    }
    const [solution, setSolution] = useState(sol);

    const [enteredNumber, setEntederNumber] = useState('')
    const [schoolClass, setSchoolClass] = useState('');
    const [counter, setCounter] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(null);

    const [color, setColor] = useState('#F7AA2E');

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        setSchoolClass('1')
        createExample();
        const id = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        setTimerId(id); // Сохраняем ID интервала в состоянии
        return () => clearInterval(id);
    
    }, [counter]);

    const createExample = () => {
        switch (schoolClass) {
            case '1':
                const firstNumber = Math.floor(Math.random() * 11);
                setNum1(firstNumber);
                const secondNumber = Math.floor(Math.random() * (firstNumber + 1));
                setNum2(secondNumber);
                const operators = ['+', '-'];
                const randomIndex = Math.floor(Math.random() * operators.length);
                setSign(operators[randomIndex]);
                if (operators[randomIndex] === '+') {
                    setSolution((firstNumber + secondNumber).toString());
                } else if (operators[randomIndex] === '-') {
                    setSolution((firstNumber - secondNumber).toString());
                }
                break;
            case '2':

                break;
            case '3':

                break;
            case '4':

                break;
        }
    }

    const handlePressAccept = () => {
        clearInterval(timerId);
        if (solution === enteredNumber) {
            setColor('green') // Останавливаем таймер по его ID
            setTimeout(() => {
                setColor('#F7AA2E')
                setEntederNumber('');
                setSeconds(0);
                setCounter(counter + 1);
            }, 2000);
        } else {
            setColor('red');
            setTimeout(() => {
                setColor('#F7AA2E')
                setEntederNumber('');
                setSeconds(0);
                setCounter(counter + 1);
            }, 2000);
        };
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
                <View style={styles.viewXpVa}>
                    <View style={styles.XpVa}>
                        <Image source={VA} style={styles.imageVa}></Image>
                        <Text style={{ marginLeft: 35 }}>568</Text>
                    </View>
                    <View style={styles.XpVa}>
                        <Image source={XP} style={styles.imageXp}></Image>
                        <Text style={{ marginLeft: 35 }}>172</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewExample}>
                <Text style={{ color: "#F7AA2E", fontSize: 100, fontWeight: '700' }}>
                    <Text>{num1} </Text>
                    <Text>{sign} </Text>
                    <Text>{num2} </Text>
                    <Text>= </Text>
                    {enteredNumber ? (
                        <Text style={{ textDecorationLine: 'underline', color: color}}>{enteredNumber}</Text>
                    ) : (
                        <Text style={{color: color}}>__</Text>
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
    viewXpVa: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: "flex-end",
        marginTop: 30
    },
    Va: {
        flexDirection: 'row'
    },
    XpVa: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        height: 40,
        width: '20%',
        marginLeft: 20,
    },
    imageVa: {
        width: 33,
        height: 33,
        marginLeft: 5
    },
    imageXp: {
        width: 38,
        height: 38,
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