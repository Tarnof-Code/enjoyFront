import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')

import { connect } from 'react-redux';


function Home(props) {

    const [imageSource, setImageSource] = useState(require("../../assets/PhotosAnims/EMY.jpg"))

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
        Roboto_400Regular
    });



    let date = new Date()
    let todayDate = moment(date).format("dddd DD MMM YYYY")


    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}> Enjoy</Text>
                </View>
                <View style={styles.welcomeBox}>
                    <Image source={imageSource} style={styles.image} />
                    <Text style={styles.welcomeMsg}>Salut {props.animName} !</Text>
                </View>
                <Text style={styles.date}>
                    {todayDate}
                </Text>
                <View style={{ alignItems: "center", marginTop: 25 }}>
                    <View style={styles.reportBox}>
                        <Text style={styles.reportTitle}>
                            Compte rendu réunion
                        </Text>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"

    },
    titleBox: {
        marginLeft: 20,
        marginTop: 50,

    },
    title: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 40,
    },
    welcomeBox: {
        marginLeft: 30,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    welcomeMsg: {
        fontFamily: "Roboto_400Regular",
        fontSize: 20,
        marginLeft: 20
    },
    date: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: 18,
        marginTop: 20,
    },
    reportBox: {
        border: "solid ",
        borderWidth: 1,
        borderColor: "black",
        minHeight: "55%",
        backgroundColor: "#ffffff",
        width: "80%",
        alignItems: "center",
        borderRadius: 40,
    },
    reportTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "300"

    }
});

function mapStateToProps(state) {
    return { animName: state.animName };
}

export default connect(mapStateToProps, null)(Home);