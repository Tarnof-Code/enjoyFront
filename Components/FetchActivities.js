import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { connect } from 'react-redux';


import AnimAndGroupDropdown from './AnimAndGroupDropdown';






export default function FetchActivities(props) {

    const [actiList, setActiList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [animGroupChoice, setAnimGroupChoice] = useState(null);



    var animOrGroupSelected = (selection) => {
        setAnimGroupChoice(selection);
    };



    useEffect(() => {
        async function getActivities() {
            let brutResponse1 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B1:T5?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response1 = await brutResponse1.json();

            let brutResponse2 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B7:T11?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response2 = await brutResponse2.json();

            let brutResponse3 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B13:T17?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response3 = await brutResponse3.json();

            let brutResponse4 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B19:T23?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response4 = await brutResponse4.json();

            let brutResponse5 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B25:T29?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response5 = await brutResponse5.json();

            let brutResponse6 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B31:T35?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response6 = await brutResponse6.json();

            let brutResponse7 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B37:T41?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response7 = await brutResponse7.json();

            let brutResponse8 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B43:T47?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response8 = await brutResponse8.json();

            let brutResponse9 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B49:T53?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response9 = await brutResponse9.json();

            let brutResponse10 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B55:T59?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response10 = await brutResponse10.json();

            let brutResponse11 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B61:T65?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response11 = await brutResponse11.json();

            let brutResponse12 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B67:T71?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response12 = await brutResponse12.json();

            let brutResponse13 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Par anim!B73:T77?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response13 = await brutResponse13.json();




            let temp = [];

            for (let i = 0; i < response1.values.length; i++) {
                temp.push({
                    date: response1.values[i][0],
                    group: response1.values[i][1],
                    anim: response1.values[i][2],
                    morning: response1.values[i][3],
                    afternoon: response1.values[i][4],
                    photo: require("../assets/LogosGroupes/Crabe.jpg")

                });

                for (let j = 0; j < response2.values.length; j++) {
                    temp.push({
                        date: response2.values[j][0],
                        group: response2.values[j][1],
                        anim: response2.values[j][2],
                        morning: response2.values[j][3],
                        afternoon: response2.values[j][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let k = 0; k < response3.values.length; k++) {
                    temp.push({
                        date: response3.values[k][0],
                        group: response3.values[k][1],
                        anim: response3.values[k][2],
                        morning: response3.values[k][3],
                        afternoon: response3.values[k][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let l = 0; l < response4.values.length; l++) {
                    temp.push({
                        date: response4.values[l][0],
                        group: response4.values[l][1],
                        anim: response4.values[l][2],
                        morning: response4.values[l][3],
                        afternoon: response4.values[l][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let m = 0; m < response5.values.length; m++) {
                    temp.push({
                        date: response5.values[m][0],
                        group: response5.values[m][1],
                        anim: response5.values[m][2],
                        morning: response5.values[m][3],
                        afternoon: response5.values[m][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let n = 0; n < response6.values.length; n++) {
                    temp.push({
                        date: response6.values[n][0],
                        group: response6.values[n][1],
                        anim: response6.values[n][2],
                        morning: response6.values[n][3],
                        afternoon: response6.values[n][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let o = 0; o < response7.values.length; o++) {
                    temp.push({
                        date: response7.values[o][0],
                        group: response7.values[o][1],
                        anim: response7.values[o][2],
                        morning: response7.values[o][3],
                        afternoon: response7.values[o][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let p = 0; p < response8.values.length; p++) {
                    temp.push({
                        date: response8.values[p][0],
                        group: response8.values[p][1],
                        anim: response8.values[p][2],
                        morning: response8.values[p][3],
                        afternoon: response8.values[p][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let q = 0; q < response9.values.length; q++) {
                    temp.push({
                        date: response9.values[q][0],
                        group: response9.values[q][1],
                        anim: response9.values[q][2],
                        morning: response9.values[q][3],
                        afternoon: response9.values[q][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let r = 0; r < response10.values.length; r++) {
                    temp.push({
                        date: response10.values[r][0],
                        group: response10.values[r][1],
                        anim: response10.values[r][2],
                        morning: response10.values[r][3],
                        afternoon: response10.values[r][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let s = 0; s < response11.values.length; s++) {
                    temp.push({
                        date: response11.values[s][0],
                        group: response11.values[s][1],
                        anim: response11.values[s][2],
                        morning: response11.values[s][3],
                        afternoon: response11.values[s][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let t = 0; t < response12.values.length; t++) {
                    temp.push({
                        date: response12.values[t][0],
                        group: response12.values[t][1],
                        anim: response12.values[t][2],
                        morning: response12.values[t][3],
                        afternoon: response12.values[t][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

                for (let u = 0; u < response13.values.length; u++) {
                    temp.push({
                        date: response13.values[u][0],
                        group: response13.values[u][1],
                        anim: response13.values[u][2],
                        morning: response13.values[u][3],
                        afternoon: response13.values[u][4],
                        photo: require("../assets/LogosGroupes/Crabe.jpg")
                    });
                };

            }
            setLoading(false);
            setActiList(temp);
        }

        getActivities()


    }, [])


    filteredList = actiList.map((e, i) => (
        <ListItem key={i} bottomDivider >
            <Avatar source={e.photo} />
            <ListItem.Content >
                <ListItem.Title style={{ color: "blue" }}>Matin: {e.morning}</ListItem.Title>
                <ListItem.Title style={{ color: "green" }}>Aprem: {e.afternoon}</ListItem.Title>
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
                    <AnimAndGroupDropdown animOrGroupSelectedParent={animOrGroupSelected} />
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
    }
});

