import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import BedroomDropdown from './BedroomDropdown';
import AnimDropdown from './AnimDropdown';
import BirthdayOverlay from './birthdayOverlay';





function FetchLists(props) {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [animChoice, setAnimChoice] = useState(null);
    const [bedroomChoice, setBedroomChoice] = useState(null);


    var animSelected = (animChoice) => {
        setAnimChoice(animChoice);
    };

    var bedroomSelected = (bedroomChoice) => {
        setBedroomChoice(bedroomChoice)
    };

    useEffect(() => {
        async function getLists() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1XBJavKcAtwZAlpG_F3p2mHAkPybxxGywL7sXWw3Y8VI/values/listeAdaptée!B4:L105?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response = await brutResponse.json();


            let temp = [];

            for (let i = 0; i < response.values.length; i++) {

                let grpeAvatar
                if (response.values[i][6] === "CRABES") {
                    grpeAvatar = require("../assets/LogosGroupes/Crabe.jpg");
                } else if (response.values[i][6] === "REQUINS") {
                    grpeAvatar = require("../assets/LogosGroupes/Requin.jpg");

                } else if (response.values[i][6] === "POULPES") {
                    grpeAvatar = require("../assets/LogosGroupes/Poulpe.jpg");

                }

                let cake
                if (response.values[i][8] === "OUI") {
                    cake = require("../assets/Gâteau.png")
                }


                temp.push({
                    lastName: response.values[i][0],
                    firstName: response.values[i][1],
                    sex: response.values[i][2],
                    birthDate: response.values[i][3],
                    age: response.values[i][4],
                    class: response.values[i][5],
                    group: response.values[i][6],
                    imageSrc: grpeAvatar,
                    room: response.values[i][7],
                    birthday: cake,
                    groupAnim: response.values[i][9],
                    bedroomAnim: response.values[i][10],

                })
            }
            setLoading(false);
            setList(temp);
        }



        getLists()


    }, [])



    let filter
    let filteredList

    if (props.group === "General") {
        filter = list
    } else if (props.group === "animators") {
        filter = list.filter(child => child.groupAnim === animChoice)
    } else if (props.group === "bedrooms") {
        filter = list.filter(child => child.room === bedroomChoice)
    } else {
        filter = list.filter(child => child.group === props.group)
    }

    filteredList = filter.map((e, i) => (
        <ListItem key={i} bottomDivider >
            <Avatar source={e.imageSrc} />
            <Text style={styles.room}>{e.room}</Text>
            <ListItem.Content >
                <ListItem.Title>{e.lastName}</ListItem.Title>
                <ListItem.Subtitle>{e.firstName}</ListItem.Subtitle>
            </ListItem.Content>
            <Avatar
                key={i}
                source={e.birthday}
                onPress={() => {
                    props.onCakeClick(e.birthDate)
                }}
            />
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
                <BirthdayOverlay />
                {props.group === "bedrooms" && (
                    <View style={{ alignItems: "center", marginLeft: 10 }}>
                        <BedroomDropdown bedroomSelectedParent={bedroomSelected} />
                    </View>
                )}
                {props.group === "animators" && (
                    <View style={{ alignItems: "center" }}>
                        <AnimDropdown animSelectedParent={animSelected} />
                    </View>
                )}
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
    room: {
        fontWeight: "400",
        fontSize: 20,
        color: "#121851"
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

function mapDispatchToProps(dispatch) {
    return {
        onCakeClick: function (date) {
            dispatch({ type: 'show', date: date })
        }
    }
}
export default connect(null, mapDispatchToProps)(FetchLists);