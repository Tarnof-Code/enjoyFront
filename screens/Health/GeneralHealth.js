import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

import DropdownAllGroup from '../../Components/DropdownAllGroup';

export default function GeneralHealth(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [animGroupChoice, setAnimGroupChoice] = useState(null);


    var animOrGroupSelected = (animGroupSelect) => {
        setAnimGroupChoice(animGroupSelect);
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
                let meal = "";
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
                // if (response.values[i][2] !== undefined) {
                //     meal = response.values[i][2];
                // };
                // if (response.values[i][3] !== undefined) {
                //     morningMeds = response.values[i][3];
                // };
                // if (response.values[i][4] !== undefined) {
                //     middayMeds = response.values[i][4];
                // };
                // if (response.values[i][5] !== undefined) {
                //     eveningMeds = response.values[i][5];
                // };
                // if (response.values[i][6] !== undefined) {
                //     ifNeededMeds = response.values[i][6];
                // };

                temp.push({
                    name: response.values[i][0],
                    group: response.values[i][7],
                    imageSrc: grpeAvatar,
                    general: general,
                    // meal: meal,
                    // morningMeds: morningMeds,
                    // middayMeds: middayMeds,
                    // eveningMeds: eveningMeds,
                    // ifNeededMeds: ifNeededMeds,
                });
            };




            setLoading(false);
            setData(temp);
        }
        fetchData();


    }, []);

    let filter
    let filteredData

    console.log(data)

    if ((animGroupChoice === null) || (animGroupChoice.toLowerCase() === "tous")) {
        filter = data.filter(child => child.general !== "")
    } else if ((animGroupChoice !== null) && (animGroupChoice.toLowerCase() === "crabes")) {
        filter = data.filter(child => (child.group.toLowerCase() === "crabes") && (child.general !== ""))
    } else if ((animGroupChoice !== null) && (animGroupChoice.toLowerCase() === "requins")) {
        filter = data.filter(child => (child.group.toLowerCase() === "requins") && (child.general !== ""))
    } else if ((animGroupChoice !== null) && (animGroupChoice.toLowerCase() === "poulpes")) {
        filter = data.filter(child => (child.group.toLowerCase() === "poulpes") && (child.general !== ""))
    }



    filteredData = filter.map((e, i) => (
        <ListItem key={i} bottomDivider >
            <Avatar source={e.imageSrc} />
            <ListItem.Content >
                <ListItem.Title style={{ color: "blue" }}>{e.name}</ListItem.Title>
                <ListItem.Title style={{ color: "green" }}>{e.general}</ListItem.Title>
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
                <DropdownAllGroup animOrGroupSelectedParent={animOrGroupSelected} />
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
});
