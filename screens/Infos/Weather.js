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
                    tFeel: response.main.feels_like,
                });
            };

            setLoading(false);
            setData(temp);
        }
        getData()
    }, []);


    console.log(data)

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
                <View style={styles.description}>
                    <Image
                        source={{ uri: data[0].icon }}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{data[0].description}</Text>
                </View>
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
        fontSize: 40,
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 90,
        height: 90,
        backgroundColor: "#74b9ff",
        borderRadius: 50,
    },
    description: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    text: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 40,
        alignSelf: "center",
        marginLeft: 20,
    }
});
