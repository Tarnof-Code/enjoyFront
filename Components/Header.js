import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; // Import the FontAwesome5 Icon Package
import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';

import { connect } from 'react-redux';



function Header(props) {

    const [imageSource, setImageSource] = useState("")

    useEffect(() => {

        let temp = require("../assets/PhotosAnims/inconnu.jpg")

        if (props.animName == "CANDICE") {
            temp = require("../assets/PhotosAnims/candice.jpg")
        } else if (props.animName == "BASTIEN") {
            temp = require("../assets/PhotosAnims/bastien.jpg")
        } else if (props.animName == "CHRISTIAN") {
            temp = require("../assets/PhotosAnims/christian.jpg")
        } else if (props.animName == "DERRIEN") {
            temp = require("../assets/PhotosAnims/derrien.jpg")
        } else if (props.animName == "EMY") {
            temp = require("../assets/PhotosAnims/emy.jpg")
        } else if (props.animName == "KHOUDEYI") {
            temp = require("../assets/PhotosAnims/khoudeyi.jpeg")
        } else if (props.animName == "MAËVA") {
            temp = require("../assets/PhotosAnims/maeva.jpeg")
        } else if (props.animName == "NICOLAS") {
            temp = require("../assets/PhotosAnims/nicolas.jpg")
        } else if (props.animName == "ROMAIN") {
            temp = require("../assets/PhotosAnims/romain.jpeg")
        } else if (props.animName == "RUDY") {
            temp = require("../assets/PhotosAnims/rudy.jpg")
        } else if (props.animName == "SAMIR") {
            temp = require("../assets/PhotosAnims/samir.jpg")
        } else if (props.animName == "VANESSA") {
            temp = require("../assets/PhotosAnims/vanessa.jpg")
        }

        setImageSource(temp)
    }, [])



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

function mapStateToProps(state) {
    return { animName: state.animName };
}

export default connect(mapStateToProps, null)(Header);