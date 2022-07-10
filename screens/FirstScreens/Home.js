import React, { useState, useEffect } from 'react';
import { ListItem } from 'react-native-elements'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')

import { connect } from 'react-redux';


function Home(props) {

    const [imageSource, setImageSource] = useState("")
    const [infos, setInfos] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getInfos() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/189xQ1QyXNOwcx5Wua_UZOJiM8i71N8GBO4IWSQSIHbE/values/Infos!A1:A20?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response = await brutResponse.json();

            let temp = [];

            for (let i = 0; i < response.values.length; i++) {
                temp.push({
                    msg: response.values[i][0]
                });
            };
            setLoading(false);
            setInfos(temp);
        }
        getInfos();
    }, []);

    useEffect(() => {

        let temp = require("../../assets/PhotosAnims/inconnu.jpg")

        if (props.animName == "CANDICE") {
            temp = require("../../assets/PhotosAnims/candice.jpg")
        } else if (props.animName == "BASTIEN") {
            temp = require("../../assets/PhotosAnims/bastien.jpg")
        } else if (props.animName == "CHRISTIAN") {
            temp = require("../../assets/PhotosAnims/christian.jpg")
        } else if (props.animName == "DERRIEN") {
            temp = require("../../assets/PhotosAnims/derrien.jpg")
        } else if (props.animName == "EMY") {
            temp = require("../../assets/PhotosAnims/emy.jpeg")
        } else if (props.animName == "KHOUDEYI") {
            temp = require("../../assets/PhotosAnims/khoudeyi.jpeg")
        } else if (props.animName == "MAËVA") {
            temp = require("../../assets/PhotosAnims/maeva.jpeg")
        } else if (props.animName == "NICOLAS") {
            temp = require("../../assets/PhotosAnims/nicolas.jpg")
        } else if (props.animName == "ROMAIN") {
            temp = require("../../assets/PhotosAnims/romain.jpeg")
        } else if (props.animName == "RUDY") {
            temp = require("../../assets/PhotosAnims/rudy.jpg")
        } else if (props.animName == "SAMIR") {
            temp = require("../../assets/PhotosAnims/samir.jpg")
        } else if (props.animName == "VANESSA") {
            temp = require("../../assets/PhotosAnims/vanessa.jpg")
        } else if (props.animName == "TARNOF") {
            temp = require("../../assets/PhotosAnims/tarnof.jpg")
        }

        setImageSource(temp)
    }, [])

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
        Roboto_400Regular
    });



    let date = new Date()
    let todayDate = moment(date).format("dddd DD MMM YYYY")
    console.log(infos)

    let mapInfos
    mapInfos = infos.map((item, index) => {
        return (
            <Text style={styles.text}>➤ {item.msg}</Text>
        )
    }
    )

    if (!fontsLoaded || loading) {
        return (
            <View style={styles.loadingBox}>
                <Text style={styles.loadingText}>Attends... Ça charge !</Text>
            </View>
        )
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
                        <ScrollView >
                            {mapInfos}
                        </ScrollView>
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
        maxHeight: "77%",
        backgroundColor: "#ffffff",
        width: "80%",
        alignItems: "center",
        padding: 20,
        borderRadius: 40,
    },
    loadingText: {
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: '400',
    },
    loadingBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        margin: 5,
        fontSize: 18,
    }
});

function mapStateToProps(state) {
    return { animName: state.animName };
}

export default connect(mapStateToProps, null)(Home);