import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Main = () => {
    const [selectedGoalId, setSelectedGoalId] = useState(null);
    const [coins, setCoins] = useState(100); // Пример количества монет
    const [xp, setXP] = useState(500); // Пример опыта

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

    const handleSetGoal = () => {
        // Обработчик установки цели, который открывает страницу с целями
        // Добавьте соответствующую навигацию
    };

    const handleLearnRules = () => {
        // Обработчик нажатия на кнопку "Узнать правила"
        // Добавьте соответствующую навигацию
    };

    const handleAchievements = () => {
        // Обработчик нажатия на кнопку "Достижения"
        // Добавьте соответствующую навигацию
    };

    const handleSettings = () => {
        // Обработчик нажатия на кнопку "Настройки"
        // Добавьте соответствующую навигацию
    };

    return (
        <View style={styles.container}>
            {/* Верхний правый угол: картинка цели и кнопка "Поставить цель" */}
            <TouchableOpacity onPress={handleSetGoal}>
                <Image
                    source={selectedGoalId ? goals.find(goal => goal.id === selectedGoalId).image : require('../assets/Goal_image.png')}
                    style={styles.goalImage}
                />
            </TouchableOpacity>
            {selectedGoalId === null && (
                <TouchableOpacity onPress={handleSetGoal} style={styles.setGoalButton}>
                    <Text style={styles.buttonText}>Выбрать цель</Text>
                </TouchableOpacity>
            )}

            {/* Центр экрана: картинка "Играть" и кнопка "Узнать правила" */}
            <View style={styles.centerContent}>
                <Image source={require('../assets/Play_button.png')} style={styles.playButton} />
                <TouchableOpacity onPress={handleLearnRules} style={styles.learnRulesButton}>
                    <Text style={styles.buttonText}>Узнай, как копить деньги</Text>
                </TouchableOpacity>
            </View>

            {/* Правый верхний угол: количество монет и XP */}
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
            <TouchableOpacity onPress={handleAchievements} style={styles.achievementsButton}>
                <Image source={require('../assets/achievement_button.png')} style={styles.achievements} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSettings} style={styles.settingsButton}>
                <Image source={require('../assets/Settings_icon.png')} style={styles.settingIcon} />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#FCF6D8',
    },
    goalImage: {
        position: 'absolute',
        top: 30,
        left: 20,
        width: 110,
        height: 110,
    },
    setGoalButton: {
        position: 'absolute',
        top: 150,
        left: 17,
        backgroundColor: '#FF7816',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    centerContent: {
        alignItems: 'center',
        marginTop: 70,
    },
    playButton: {
        width: 165,
        height: 200,
        marginBottom: 20,
    },
    learnRulesButton: {
        backgroundColor: '#FF7816',
        padding: 10,
        borderRadius: 5,
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
    achievementsButton: {
        position: 'absolute',
        top: 50,
        right: 5,
    },
    achievements: {
        marginTop: 20,
        width: 165,
        height: 114,
    },
    settingsButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
    settingIcon: {
        width: 50,
        height: 50,
    }
});

export default Main;
