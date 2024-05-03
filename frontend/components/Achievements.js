import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Monet1 from '../assets/monet1.png';
import Monet2 from '../assets/monet2.png';
import Monet3 from '../assets/monet3.png';
import Monet4 from '../assets/monet4.png';
import Monet5 from '../assets/monet5.png';
const Achievements = () => {

    const [xp, setXp] = useState(500);
    const [completedAchievements, setCompletedAchievements] = useState([])

    const fun = (id) => {
        setCompletedAchievements([...completedAchievements, id]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textAchievements}>Достижения</Text>
            <View style={styles.containerElement}>
                <View style={styles.imgContainer}>
                    <Image source={Monet1} style={styles.img1}></Image>
                </View>
                <View style={styles.text}>
                    <Text>Мастер карманных денег</Text>
                </View>
                <View style={styles.scaleMaket}>
                    {xp <= 30 ? (
                        <View style={[styles.scale, { width: `${(xp / 30) * 100}%`, height: '100%' }]}></View>
                    ) : (
                        <View style={[styles.scale, { width: '100%', height: '100%' }]}></View>
                    )}
                </View>
                <View style={styles.viewTextXp}>
                    <Text style={styles.textXp}>30xp</Text>
                </View>
                {completedAchievements.includes(1) ? (
                    <Text>Награда получена</Text>
                ) : (
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: xp < 30 ? '#FFD155' : '#F7AA2E' }]}
                        onPress={() => { xp >= 30 && fun(1) }}
                    >
                        <Text style={styles.buttonText}>+100 VA</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.containerElement}>
                <View style={styles.imgContainer}>
                    <Image source={Monet2} style={styles.img2}></Image>
                </View>
                <View style={styles.text}>
                    <Text>Финансовый фокусник</Text>
                </View>
                <View style={styles.scaleMaket}>
                    {xp <= 60 ? (
                        <View style={[styles.scale, { width: `${(xp / 60) * 100}%`, height: '100%' }]}></View>
                    ) : (
                        <View style={[styles.scale, { width: '100%', height: '100%' }]}></View>
                    )}
                </View>
                <View style={styles.viewTextXp}>
                    <Text style={styles.textXp}>60xp</Text>
                </View>
                {completedAchievements.includes(2) ? (
                    <Text>Награда получена</Text>
                ) : (
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: xp < 60 ? '#FFD155' : '#F7AA2E' }]}
                        onPress={() => { xp >= 60 && fun(2) }}
                    >
                        <Text style={styles.buttonText}>+200 VA</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.containerElement}>
                <View style={styles.imgContainer}>
                    <Image source={Monet3} style={styles.img3}></Image>
                </View>
                <View style={styles.text}>
                    <Text>Золотой трудяга</Text>
                </View>
                <View style={styles.scaleMaket}>
                    {xp <= 100 ? (
                        <View style={[styles.scale, { width: `${(xp / 100) * 100}%`, height: '100%' }]}></View>
                    ) : (
                        <View style={[styles.scale, { width: '100%', height: '100%' }]}></View>
                    )}
                </View>
                <View style={styles.viewTextXp}>
                    <Text style={styles.textXp}>100xp</Text>
                </View>
                {completedAchievements.includes(3) ? (
                    <Text>Награда получена</Text>
                ) : (
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: xp < 100 ? '#FFD155' : '#F7AA2E' }]}
                        onPress={() => { xp >= 100 && fun(3) }}
                    >
                        <Text style={styles.buttonText}>+350 VA</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.containerElement}>
                <View style={styles.imgContainer}>
                    <Image source={Monet4} style={styles.img4}></Image>
                </View>
                <View style={styles.text}>
                    <Text>Денежный гений</Text>
                </View>
                <View style={styles.scaleMaket}>
                    {xp <= 200 ? (
                        <View style={[styles.scale, { width: `${(xp / 200) * 100}%`, height: '100%' }]}></View>
                    ) : (
                        <View style={[styles.scale, { width: '100%', height: '100%' }]}></View>
                    )}
                </View>
                <View style={styles.viewTextXp}>
                    <Text style={styles.textXp}>200xp</Text>
                </View>
                {completedAchievements.includes(4) ? (
                    <Text>Награда получена</Text>
                ) : (
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: xp < 200 ? '#FFD155' : '#F7AA2E' }]}
                        onPress={() => { xp >= 200 && fun(4) }}
                    >
                        <Text style={styles.buttonText}>+700 VA</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.containerElement}>
                <View style={styles.imgContainer}>
                    <Image source={Monet5} style={styles.img5}></Image>
                </View>
                <View style={styles.text}>
                    <Text>Монетный магнат</Text>
                </View>
                <View style={styles.scaleMaket}>
                    {xp <= 500 ? (
                        <View style={[styles.scale, { width: `${(xp / 500) * 100}%`, height: '100%' }]}></View>
                    ) : (
                        <View style={[styles.scale, { width: '100%', height: '100%' }]}></View>
                    )}
                </View>
                <View style={styles.viewTextXp}>
                    <Text style={styles.textXp}>500xp</Text>
                </View>
                {completedAchievements.includes(5) ? (
                    <Text>Награда получена</Text>
                ) : (
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: xp < 500 ? '#FFD155' : '#F7AA2E' }]}
                        onPress={() => { xp >= 500 && fun(5) }}
                    >
                        <Text style={styles.buttonText}>+1500 VA</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FCF6D8'
    },
    textAchievements: {
        fontSize: 40,
        fontWeight: '900',
        color: '#FF7816',
        marginBottom: 15,
    },
    img1: {
        width: 60, // задайте требуемую ширину
        height: 60, // задайте требуемую высоту
    },
    img2: {
        width: 73, // задайте требуемую ширину
        height: 60, // задайте требуемую высоту
    },
    img3: {
        width: 95, // задайте требуемую ширину
        height: 60, // задайте требуемую высоту
    },
    img4: {
        width: 108, // задайте требуемую ширину
        height: 60, // задайте требуемую высоту
    },
    img5: {
        width: 127, // задайте требуемую ширину
        height: 60, // задайте требуемую высоту
    },
    containerElement: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgContainer: {
        width: 150,
        alignItems: "center"
    },
    scaleMaket: {
        height: 25,
        width: 250,
        borderWidth: 1,
    },
    text: {
        width: 200
    },
    textXp: {
        fontSize: 18,
    },
    viewTextXp: {
        width: 120,
        alignItems: "center"
    },
    button: {
        width: 110,
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 23
    },
    scale: {
        backgroundColor: '#FF7816'
    }
});


export default Achievements;
