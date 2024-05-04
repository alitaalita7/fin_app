import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Rules = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Правила</Text>
            <View style={styles.ruleContainer}>
                <Image source={require('../assets/Goal_icon.png')} style={[styles.image, {width: 105, height: 110}]} />
                <Text style={styles.ruleText}>
                    1. Для того, чтобы уметь правильно распоряжаться своими финансами, важно ставить перед собой 
                    <Text style={styles.emphasis}> цели</Text>. Мы поможем тебе в этом.
                </Text>
            </View>
            <View style={styles.ruleContainer}>
                <Image source={require('../assets/Play_button.png')} style={[styles.image, {width: 105, height: 123}]} />
                <Text style={styles.ruleText}>
                    2.<Text style={styles.emphasis}>  Копить</Text> на цель бывает трудно. Но мы верим в тебя! 
                </Text>
            </View>
            <View style={styles.ruleContainer}>
                <Image source={require('../assets/VA_coin.png')} style={[styles.image, {width: 94, height: 97, marginRight:30}]} />
                <Text style={styles.ruleText}>
                    3. За верное решение примера ты получишь <Text style={styles.emphasis}>VA coin</Text> , за неверное решение -потеряешь. Умение хорошо считать поможет тебе в финансовых делах.
                </Text>
            </View>
            <View style={styles.ruleContainer}>
                <Image source={require('../assets/xp.png')} style={[styles.image, {width: 100, height: 100}]} />
                <Text style={styles.ruleText}>
                    4. Решай примеры как можно быстрее и получай <Text style={styles.emphasis}>очки опыта</Text> за скорость. Ведь быстро принимать верные решения бывает очень важно.
                </Text>
            </View>
            <View style={styles.ruleContainer}>
                <Image source={require('../assets/achievement_icon.png')} style={[styles.image, {width: 100, height: 110}]} />
                <Text style={styles.ruleText}>
                    5. Копи очки опыта и получай <Text style={styles.emphasis}>достижения</Text>, за которые можно заработать VA coin. 
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCF6D8',
        width: '100%',
        height: 'auto',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#FF7816',
        marginBottom: 20,
    },
    ruleContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 20,
    },
    ruleText: {
        flex: 1,
        fontSize: 19,
        color: 'black',
        textAlign: 'left',
    },
    emphasis: {
        color: '#FF7816', // Пример цвета
        fontWeight: 'bold'
    },
});

export default Rules;
