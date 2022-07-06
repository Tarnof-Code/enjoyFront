import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')

import DatesDropdown from './DatesDropdown';

export default function FetchEvening(props) {

    const [eveningList, setEveningList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dateChoice, setDateChoice] = useState(null);

    var dateSelected = (dateSelect) => {
        setDateChoice(dateSelect);
    };

    useEffect(() => {
        async function getEvening() {
            let brutResponse1 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Veillées!B1:T4?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response1 = await brutResponse1.json();

            let brutResponse2 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Veillées!B5:T8?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response2 = await brutResponse2.json();

            let brutResponse3 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Veillées!B9:T12?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response3 = await brutResponse3.json();


            let temp = [];

            for (let i = 0; i < response1.values.length; i++) {
                temp.push({
                    date: response1.values[i][0],
                    group: response1.values[i][1],
                    veillee: response1.values[i][2],
                    photo: require("../assets/LogosGroupes/Crabe.jpg")
                });
            }

            for (let j = 0; j < response2.values.length; j++) {
                temp.push({
                    date: response2.values[j][0],
                    group: response2.values[j][1],
                    veillee: response2.values[j][2],
                    photo: require("../assets/LogosGroupes/Requin.jpg")
                });
            };

            for (let k = 0; k < response3.values.length; k++) {
                temp.push({
                    date: response3.values[k][0],
                    group: response3.values[k][1],
                    veillee: response3.values[k][2],
                    photo: require("../assets/LogosGroupes/Poulpe.jpg")
                });
            };


            setLoading(false);
            setEveningList(temp);
        }



        getEvening()


    }, [])

    let filter
    let filteredList



    if (dateChoice === null) {
        let date = new Date()
        if (date < new Date("2022-07-11")) {
            date = new Date("2022-07-11")
        }
        let todayDate = moment(date).format("DD/MM/YYYY")

        filter = eveningList.filter(veillee => veillee.date === todayDate)
    } else {
        filter = eveningList.filter(veillee => veillee.date === dateChoice)
    }




    filteredList = filter.map((e, i) => (
        <ListItem key={i} bottomDivider >
            <Avatar rounded style={styles.avatar} source={e.photo} />
            <ListItem.Content >
                <ListItem.Title style={{ color: "blue" }}>{e.veillee}</ListItem.Title>
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
                <ScrollView>
                    {filteredList}
                </ScrollView>
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
    }
});

