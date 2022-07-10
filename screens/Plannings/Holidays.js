import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function Holidays(props) {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getHolidays() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1chd70zTnnbjv_6a5aRUolYaMDCKhKdg_HuLQQ_3rHFs/values/Congés!A1:M3?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response = await brutResponse.json();


            let temp = [];

            for (let i = 0; i < response.values.length; i++) {

                let image

                if (response.values[i][0].toLowerCase() === "romain") {
                    image = require("../../assets/PhotosAnims/romain.jpeg");
                } else if (response.values[i][0].toLowerCase() === "emy") {
                    image = require("../../assets/PhotosAnims/emy.jpeg");
                } else if (response.values[i][0].toLowerCase() === "maeva") {
                    image = require("../../assets/PhotosAnims/maeva.jpeg");
                } else if (response.values[i][0].toLowerCase() === "khoudeyi") {
                    image = require("../../assets/PhotosAnims/khoudeyi.jpeg");
                } else if (response.values[i][0].toLowerCase() === "christian") {
                    image = require("../../assets/PhotosAnims/christian.jpg");
                } else if (response.values[i][0].toLowerCase() === "candice") {
                    image = require("../../assets/PhotosAnims/candice.jpg");
                } else if (response.values[i][0].toLowerCase() === "bastien") {
                    image = require("../../assets/PhotosAnims/bastien.jpg");
                } else if (response.values[i][0].toLowerCase() === "nicolas") {
                    image = require("../../assets/PhotosAnims/nicolas.jpg");
                } else if (response.values[i][0].toLowerCase() === "samir") {
                    image = require("../../assets/PhotosAnims/samir.jpg");
                } else if (response.values[i][0].toLowerCase() === "rudy") {
                    image = require("../../assets/PhotosAnims/rudy.jpg");
                } else if (response.values[i][0].toLowerCase() === "vanessa") {
                    image = require("../../assets/PhotosAnims/vanessa.jpg");
                } else if (response.values[i][0].toLowerCase() === "derrien") {
                    image = require("../../assets/PhotosAnims/derrien.jpg");
                } else if (response.values[i][0].toLowerCase() === "tarnof") {
                    image = require("../../assets/PhotosAnims/tarnof.jpg");
                }


                temp.push({
                    anim: response.values[i][0],
                    firstDay: response.values[i][1],
                    secondDay: response.values[i][2],
                    imageSrc: image
                })
            }
            setLoading(false);
            setList(temp);
        }



        getHolidays()


    }, [])



    filteredList = list.map((e, i) => (
        <ListItem key={i}  >
            <Avatar
                rounded
                source={e.imageSrc}
                size="medium"

            />
            <ListItem.Content >
                <ListItem.Title style={{ color: "blue" }}>{e.firstDay}</ListItem.Title>
                <ListItem.Title style={{ color: "green" }}>{e.secondDay}</ListItem.Title>
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


