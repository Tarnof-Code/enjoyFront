import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')

import DatesDropdown from '../../Components/DatesDropdown';

export default function Surveillance(props) {

    const [wakeUpList, setWakeUpList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dateChoice, setDateChoice] = useState(null);

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
    });

    var dateSelected = (dateSelect) => {
        setDateChoice(dateSelect);
    };

    useEffect(() => {
        async function getWakeUp() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1chd70zTnnbjv_6a5aRUolYaMDCKhKdg_HuLQQ_3rHFs/values/Levers!B1:R6?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response = await brutResponse.json();

            let temp = [];

            for (let i = 0; i < response.values.length; i++) {

                temp.push({
                    date: response.values[i][0],
                    couloirA: response.values[i][1],
                    etageCouloirB: response.values[i][2],
                    rdcCouloirB: response.values[i][3],
                    salleReveilA: response.values[i][4],
                    salleReveilB: response.values[i][5],
                });
            }

            setLoading(false);
            setWakeUpList(temp);
        }



        getWakeUp()


    }, [])

    let filter
    let filteredList



    if (dateChoice === null) {
        let date = new Date()
        if (date < new Date("2022-07-12")) {
            date = new Date("2022-07-12")
        }
        let todayDate = moment(date).format("DD/MM/YYYY")

        filter = wakeUpList.filter(anim => anim.date === todayDate)
    } else {
        filter = wakeUpList.filter(anim => anim.date === dateChoice)
    }




    filteredList = filter.map((e, i) => (
        <ListItem key={i} bottomDivider  >
            <ListItem.Content style={{ alignItems: "center", marginBottom: 20 }}>
                <LinearGradient
                    colors={["#f7f1e3", '#dff9fb']}
                    style={styles.card}
                >
                    <ListItem.Title style={styles.hour}>7H30</ListItem.Title>
                    <ListItem.Title style={styles.title}>Couloir A</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{e.couloirA}</ListItem.Subtitle>
                    <ListItem.Title style={styles.title}>Couloir B / Rdc</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{e.rdcCouloirB}</ListItem.Subtitle>
                    <ListItem.Title style={styles.title}>Couloir B / Etage</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{e.etageCouloirB}</ListItem.Subtitle>
                </LinearGradient>

                <LinearGradient
                    colors={["#f7f1e3", '#ffcccc']}
                    style={styles.card}
                >
                    <ListItem.Title style={styles.hour}>7H45</ListItem.Title>
                    <ListItem.Title style={styles.title}>Salle de réveil A</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{e.salleReveilA}</ListItem.Subtitle>
                    <ListItem.Title style={styles.title}>Salle de réveil B</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{e.salleReveilB}</ListItem.Subtitle>
                </LinearGradient>
            </ListItem.Content>
        </ListItem>
    ))

    if (loading || !fontsLoaded) {
        return (
            <View style={styles.loadingBox}>
                <Text style={styles.loadingText}>Attends... Ça charge !</Text>
            </View>
        )
    } else {

        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center" }}>
                    <DatesDropdown dateSelectedParent={dateSelected} />
                </View>
                <View>
                    {filteredList}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

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
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    title: {
        color: "blue",
        fontSize: 18,
        marginTop: 10
    },
    subTitle: {
        fontSize: 18
    },
    hour: {
        color: "red",
        fontSize: 25,
        // fontWeight: "bold",
        fontFamily: "DancingScript_400Regular",
    },
    card: {
        borderRadius: 30,
        alignItems: "center",
        width: "100%",
        paddingTop: 5,
        paddingBottom: 12,
        marginBottom: 12,

    },
});

