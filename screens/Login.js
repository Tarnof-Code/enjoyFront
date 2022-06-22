import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from "expo-app-loading";

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';



export default function Login(props) {

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Enjoy </Text>
                <Text style={styles.subTitle}> Connexion </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#121851',
        alignItems: 'center',
    },
    title: {
        fontSize: 100, color: "white",
        fontFamily: 'DancingScript_400Regular',
        marginTop: 60,
    },
    subTitle: {
        fontSize: 30, color: "white",
        fontFamily: 'Roboto_400Regular',
        marginTop: 60,
    }
});