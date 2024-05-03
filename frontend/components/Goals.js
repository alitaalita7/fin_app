import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const Goals = () => {

    const [selectedGoalId, setSelectedGoalId] = useState(null);
    const [progress, setProgress] = useState(150);
    const [completedGoals, setCompletedGoals] = useState([2]);

    const goals = [
        {
            id: 1,
            image: require('../assets/ice_cream.png'), // Измените на путь к изображению
            cost: '150 VA',
        },
        {
            id: 2,
            image: require('../assets/tickets.png'), // Измените на путь к изображению
            cost: '250 VA',
        },
        {
            id: 3,
            image: require('../assets/cross.png'), // Измените на путь к изображению
            cost: '600 VA',
        },
        {
            id: 4,
            image: require('../assets/phone.png'), // Измените на путь к изображению
            cost: '1000 VA',
        },
        {
            id: 5,
            title: 'PC',
            image: require('../assets/PC.png'), // Измените на путь к изображению
            cost: '2500 VA',
        },
    ];

    const renderGoalButton = (goal) => {
        const costValue = parseFloat(goal.cost.split(' ')[0]);

        const handleBuyButtonPress = () => {
            setCompletedGoals(prevCompletedGoals => [...prevCompletedGoals, goal.id]);
            setSelectedGoalId(null)
        };

        if (completedGoals.includes(goal.id)) {
            return null;
        } else if (goal.id === selectedGoalId) {
            if (progress === costValue) {
                return (
                    <TouchableOpacity style={styles.button} onPress={handleBuyButtonPress}>
                        <Text style={styles.buttonText}>Купить</Text>
                    </TouchableOpacity>
                );
            }else {
                return <Text style={styles.selectedGoalText}>Цель выбрана</Text>;
            }
        } else if (selectedGoalId) {
            return <TouchableOpacity style={styles.disabledButton}><Text style={styles.buttonText}>Поставить цель</Text></TouchableOpacity>;
        } else {
            return <TouchableOpacity style={styles.button} onPress={() => setSelectedGoalId(goal.id)}><Text style={styles.buttonText}>Поставить цель</Text></TouchableOpacity>;
        }
    };

    const renderGoalProgress = (goal) => {

        const costValue = parseFloat(goal.cost.split(' ')[0]);

        if (completedGoals.includes(goal.id)) {
            return <Text style={styles.completedGoalText}>Цель достигнута!</Text>;
        } else if (goal.id === selectedGoalId) {
            return (
                <View style={styles.progressContainer}>
                    <View style={[styles.progressBar, { width: `${(progress / costValue) * 100}%` }]} />
                </View>
            );
        } else if (selectedGoalId) {
            return <Text style={styles.progressText}>Сначала достигните уже поставленной цели!</Text>;
        } else {
            return <Text style={styles.progressText}>Выберите цель для себя и обязательно достигните ее!</Text>;;
        }
    };

    const renderCost = (goal) => {
        if (completedGoals.includes(goal.id)) {
            return null;
        }
        return <Text style={styles.cost}>{goal.cost}</Text>;
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Цели</Text>
            {goals.map(goal => (
                <View key={goal.id} style={styles.goalContainer}>
                    {goal.title === 'PC' ? (
                        <Image source={goal.image} style={styles.imagePC} />
                    ) : (
                        <Image source={goal.image} style={styles.image} />
                    )}
                    {renderCost(goal)}
                    {renderGoalProgress(goal)}
                    {renderGoalButton(goal)}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCF6D8',
        width: '100%',
        height: 'auto',
    },
    title: {
        marginTop: 25,
        fontSize: 40,
        fontWeight: '900',
        color: '#FF7816',
        width: '100%',
        textAlign: 'center'
    },
    goalContainer: {
        marginStart: 20,
        marginEnd: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 100, // Измените на требуемую ширину
        height: 100, // Измените на требуемую высоту
        marginBottom: 10,
    },
    imagePC: {
        width: 90, // Измените на требуемую ширину
        height: 70, // Измените на требуемую высоту
        marginBottom: 10,
    },
    cost: {
        color: '#FF7816',
        fontSize: 18,
        fontWeight: '900'
    },
    button: {
        backgroundColor: '#FF7816',
        paddingTop: 11,
        borderRadius: 5,
        width: 160,
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    disabledButton: {
        backgroundColor: '#FFD155',
        paddingTop: 11,
        borderRadius: 5,
        width: 160,
        height: 50,
    },
    selectedGoalText: {
        color: '#FF7816',
        fontWeight: 'bold',
        fontSize: 18,
        width: 160,
        paddingStart: 15
    },
    completedGoalText: {
        color: '#FF7816',
        fontWeight: 'bold',
        fontSize: 18,
        width: 160,
    },
    progressContainer: {
        width: 300,
        height: 20,
        backgroundColor: '#FCF6D8',
        borderWidth: 0.6,
        borderColor: 'black',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#FF7816',
    },
    progressText: {
        color: 'black',
    },
});

export default Goals;
