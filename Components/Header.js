import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; // Import the FontAwesome5 Icon Package
import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';



export default function Header(props) {

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular
    });

    if (!fontsLoaded) {
        return null;
    } else {

        return (
            <View style={styles.container}>
                <View style={styles.alignElements}>
                    <FontAwesome5 style={styles.icon} name={props.iconName} size={27} color="#000000" />
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-end',
    },
    icon: {
        marginLeft: 20,
        marginBottom: 5
    },
    alignElements: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'DancingScript_400Regular',
        marginLeft: 10,
        fontSize: 30,
        marginBottom: 10
    }
});