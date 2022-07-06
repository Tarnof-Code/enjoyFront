import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; // Import the FontAwesome5 Icon Package
import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';



export default function Header(props) {
    let imageSource = require("../assets/PhotosAnims/romain.jpeg");

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular
    });

    if (!fontsLoaded) {
        return null;
    } else {

        return (
            <View style={styles.container}>
                <View style={styles.alignElements}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 style={styles.icon} name={props.iconName} size={27} color="#000000" />
                    </View >
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        console.log("clicked");
                    }}>
                        <Image
                            source={imageSource}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-end',
    },
    icon: {
        marginLeft: 15,
        marginBottom: 4
    },
    alignElements: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'DancingScript_400Regular',
        fontSize: 30,
        marginBottom: 9,


    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 100,
        marginBottom: 7,
    },
    textContainer: {
        width: "60%"
    },
    iconContainer: {
        width: "15%"
    }

});
