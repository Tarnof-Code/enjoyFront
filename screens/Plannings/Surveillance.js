import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')

import DatesDropdown from '../../Components/DatesDropdown';

export default function Surveillance(props) {

    const [surveillanceList, setSurveillanceList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dateChoice, setDateChoice] = useState(null);

    var dateSelected = (dateSelect) => {
        setDateChoice(dateSelect);
    };

    useEffect(() => {
        async function getSurveillance() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1chd70zTnnbjv_6a5aRUolYaMDCKhKdg_HuLQQ_3rHFs/values/Surveillance!B1:S4?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response = await brutResponse.json();

            let temp = [];

            for (let i = 0; i < response.values.length; i++) {

                temp.push({
                    date: response.values[i][0],
                    batA: response.values[i][1],
                    etageBatB: response.values[i][2],
                    rdcBatB: response.values[i][3],

                });
            }

            setLoading(false);
            setSurveillanceList(temp);
        }

        getSurveillance()


    }, [])

    let filter
    let filteredList



    if (dateChoice === null) {
        let date = new Date()
        if (date < new Date("2022-07-11")) {
            date = new Date("2022-07-11")
        }
        let todayDate = moment(date).format("DD/MM/YYYY")

        filter = surveillanceList.filter(anim => anim.date === todayDate)
    } else {
        filter = surveillanceList.filter(anim => anim.date === dateChoice)
    }




    filteredList = filter.map((e, i) => (
        <ListItem key={i} bottomDivider  >
            <ListItem.Content style={{ alignItems: "center", marginBottom: 20 }}>
                <LinearGradient
                    colors={["#f7f1e3", '#dff9fb']}
                    style={styles.card}
                >
                    <ListItem.Title style={styles.title}>Bâtiment A</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{e.batA}</ListItem.Subtitle>
                    <ListItem.Title style={styles.title}>Bâtiment B / Rdc</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{e.rdcBatB}</ListItem.Subtitle>
                    <ListItem.Title style={styles.title}>Bâtiment B / Etage</ListItem.Title>
                    <ListItem.Subtitle style={styles.subTitle}>{e.etageBatB}</ListItem.Subtitle>
                </LinearGradient>
                <ListItem.Title style={{ marginBottom: 200 }}></ListItem.Title>
            </ListItem.Content>
        </ListItem>
    ))

    if (loading) {
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
        fontSize: 20,
        marginTop: 30
    },
    subTitle: {
        fontSize: 20
    },
    card: {
        borderRadius: 30,
        alignItems: "center",
        width: "100%",
        paddingTop: 5,
        paddingBottom: 30,
        marginBottom: 10,
        marginTop: 40
    }

});

