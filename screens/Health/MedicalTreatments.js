import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

import DropdownTreatment from '../../Components/DropdownTreatment';

export default function Treatment(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [treatmentChoice, setTreatmentChoice] = useState(null);


    var treatmentSelected = (treatmentSelect) => {
        setTreatmentChoice(treatmentSelect);
    };

    useEffect(() => {
        async function fetchData() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/18apjvwYBXrfsfhY9q3m00pyhWVI1McJccgvdCOXaJ_M/values/Pour BDD!A2:H91?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y"
            );
            let response = await brutResponse.json();


            let temp = [];

            for (let i = 0; i < response.values.length; i++) {
                let general = "";
                let morningMeds = "";
                let middayMeds = "";
                let eveningMeds = "";
                let ifNeededMeds = "";

                let grpeAvatar
                if (response.values[i][7] === "CRABES") {
                    grpeAvatar = require("../../assets/LogosGroupes/Crabe.jpg");
                } else if (response.values[i][7] === "REQUINS") {
                    grpeAvatar = require("../../assets/LogosGroupes/Requin.jpg");

                } else if (response.values[i][7] === "POULPES") {
                    grpeAvatar = require("../../assets/LogosGroupes/Poulpe.jpg");

                }

                if (response.values[i][1] !== undefined) {
                    general = response.values[i][1];
                };

                if (response.values[i][3] !== undefined) {
                    morningMeds = response.values[i][3];
                };
                if (response.values[i][4] !== undefined) {
                    middayMeds = response.values[i][4];
                };
                if (response.values[i][5] !== undefined) {
                    eveningMeds = response.values[i][5];
                };
                if (response.values[i][6] !== undefined) {
                    ifNeededMeds = response.values[i][6];
                };

                temp.push({
                    name: response.values[i][0],
                    group: response.values[i][7],
                    imageSrc: grpeAvatar,
                    general: general,
                    morningMeds: morningMeds,
                    middayMeds: middayMeds,
                    eveningMeds: eveningMeds,
                    ifNeededMeds: ifNeededMeds,
                });
            };




            setLoading(false);
            setData(temp);
        }
        fetchData();


    }, []);

    let filter
    let filteredData

    if (treatmentChoice === null) {
        filter = data
    } else if (treatmentChoice.toLowerCase() === "quotidiens") {
        filter = data.filter(child => (child.morningMeds !== "") || (child.middayMeds !== "") || (child.eveningMeds !== ""))
    } else if (treatmentChoice.toLowerCase() === "si besoin") {
        filter = data.filter(child => (child.ifNeededMeds !== ""))
    }


    if (treatmentChoice === null) {
        filter = data
    } else if (treatmentChoice.toLowerCase() === "quotidiens") {
        filteredData = filter.map((e, i) => (
            <ListItem key={i} bottomDivider >
                <Avatar source={e.imageSrc} />
                <ListItem.Content >
                    <ListItem.Title style={styles.name}>{e.name}</ListItem.Title>
                    {e.morningMeds !== "" ? <Text style={styles.morning}>Matin : {e.morningMeds}</Text> : null}
                    {e.middayMeds !== "" ? <Text style={styles.midday}>Midi : {e.middayMeds}</Text> : null}
                    {e.eveningMeds !== "" ? <Text style={styles.evening}>Soir : {e.eveningMeds}</Text> : null}
                </ListItem.Content>
            </ListItem>
        ))
    } else if (treatmentChoice.toLowerCase() === "si besoin") {
        filteredData = filter.map((e, i) => (
            <ListItem key={i} bottomDivider >
                <Avatar source={e.imageSrc} />
                <ListItem.Content >
                    <ListItem.Title style={styles.name}>{e.name}</ListItem.Title>
                    {e.ifNeededMeds !== "" ? <Text style={styles.morning}>{e.ifNeededMeds}</Text> : null}
                </ListItem.Content>
            </ListItem>
        ))
    }





    if (loading) {
        return (
            <View style={styles.loadingBox}>
                <Text style={styles.loadingText}>Attends... Ça charge !</Text>
            </View>
        )
    } else {

        return (
            <View style={styles.container}>
                <DropdownTreatment treatmentSelectedParent={treatmentSelected} />
                <ScrollView>
                    {filteredData}
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
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    morning: {
        color: "blue",
        marginVertical: 4,
    },
    midday: {
        color: "green",
        marginVertical: 4,
    },
    evening: {
        color: "purple",
        marginVertical: 4,
    },

});
