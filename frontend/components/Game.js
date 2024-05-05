import React from 'react'
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
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.timer}>
                    <Image source={Timer} style={{ width: 60, height: 60 }}></Image>
                    <Text style={{ fontSize: 40, fontWeight: '300' }}>00:00</Text>
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
                    2 × 2 =
                    <Text> </Text>
                    <Text style={{ textDecorationLine: 'underline' }}>5</Text>
                </Text>
            </View>
            <View style={styles.viewButtons}>
                <TouchableOpacity>
                    <Image source={Number_1} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_2} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_3} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_4} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_5} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_6} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_7} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_8} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_9} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Number_0} style={styles.imageButtons}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Remove} style={{ width: 119, height: 60, marginLeft: 10 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
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