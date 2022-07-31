import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';

export default function Weather(props) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular
    });


    useEffect(() => {
        async function getData() {
            let brutResponse = await fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=ploemeur&appid=f12aa396c2e25f258328c84486c47f46&lang=fr&units=metric"
            );
            let response = await brutResponse.json();

            let temp = [];

            if (response.cod === 200) {
                temp.push({
                    description: response.weather[0].description,
                    icon: "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png",
                    tMin: response.main.temp_min,
                    tMax: response.main.temp_max,
                });
            };

            setLoading(false);
            setData(temp);
        }
        getData()
    }, []);


    let time = new Date().getHours();
    console.log(time);
    let timeOfDay;

    if (time > 0 && time < 12) {
        timeOfDay = "matin";
    } else if (time >= 12 && time < 18) {
        timeOfDay = "après-midi";
    } else if (time >= 18 && time < 24) {
        timeOfDay = "soir";
    }



    if (loading || !fontsLoaded || data === null) {
        return (
            <View style={styles.loadingBox}>
                <Text style={styles.loadingText}>Attends... Ça charge !</Text>
            </View>
        )
    } else {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Météo du jour</Text>
                <Text style={styles.timeOfDay}>{timeOfDay}</Text>
                <View style={styles.description}>
                    <Image
                        source={{ uri: data[0].icon }}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{data[0].description}</Text>
                </View>
                <Text style={styles.tempMin}>Température Min : {data[0].tMin} °C</Text>
                <Text style={styles.tempMax}>Température Max : {data[0].tMax} °C</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#ffffff"
    },
    title: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 30,
        marginTop: 20,
        marginBottom: 40,
    },
    image: {
        width: 60,
        height: 60,
        // backgroundColor: "#74b9ff",
        // borderRadius: 30,
    },
    description: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: 20,
    },
    text: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 25,
        alignSelf: "center",
        marginLeft: 20,
    },
    tempMin: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 20,
        color: "blue",
    },
    tempMax: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 20,
        alignSelf: "center",
        marginLeft: 20,
        color: "red",
    },
    timeOfDay: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 30,
    },


});
