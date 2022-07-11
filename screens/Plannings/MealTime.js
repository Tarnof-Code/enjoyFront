import React, { useEffect, useState } from 'react';
import { ListItem, Avatar, Button } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')


import DropdownDates from "../../Components/DropdownDates";


export default function FetchMeals(props) {

    const [planningMeals, setPlanningMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dateChoice, setDateChoice] = useState(null);

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular
    });

    var dateSelected = (dateSelect) => {
        setDateChoice(dateSelect);
    };


    useEffect(() => {
        async function getMeals() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1CkQmtzlAjihUrYe5uD1U30UiYx4RomkFUNTy9YiUuZY/values/Repas!C1:T10?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response = await brutResponse.json();


            let temp = [];

            for (let i = 0; i < response.values.length; i++) {
                temp.push({
                    date: response.values[i][0],
                    group: "Crabes",
                    ptitDej: response.values[i][1],
                    dej: response.values[i][4],
                    diner: response.values[i][7],
                    photo: require("../../assets/LogosGroupes/Crabe.jpg")
                });
            };



            for (let i = 0; i < response.values.length; i++) {
                temp.push({
                    date: response.values[i][0],
                    group: "Requins",
                    ptitDej: response.values[i][2],
                    dej: response.values[i][5],
                    diner: response.values[i][8],
                    photo: require("../../assets/LogosGroupes/Requin.jpg")
                });
            };

            for (let i = 0; i < response.values.length; i++) {
                temp.push({
                    date: response.values[i][0],
                    group: "Poulpes",
                    ptitDej: response.values[i][3],
                    dej: response.values[i][6],
                    diner: response.values[i][9],
                    photo: require("../../assets/LogosGroupes/Poulpe.jpg")
                });
            };




            setLoading(false);
            setPlanningMeals(temp);
        }



        getMeals()


    }, [])

    let filter
    let breakfast
    let lunch
    let diner



    if (dateChoice === null) {
        let date = new Date()
        if (date < new Date("2022-07-12")) {
            date = new Date("2022-07-12")
        }
        let todayDate = moment(date).format("DD/MM/YYYY")

        filter = planningMeals.filter(meal => meal.date === todayDate)
    } else {
        filter = planningMeals.filter(meal => meal.date === dateChoice)
    }


    breakfast = filter.map((e, i) => (
        <ListItem key={i} style={{ marginLeft: 30 }}>
            <Avatar rounded style={styles.avatar} source={e.photo} />
            <ListItem.Content >
                <ListItem.Title style={{ color: "blue" }}>{e.ptitDej}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    ));

    lunch = filter.map((e, i) => (
        <ListItem key={i} style={{ marginLeft: 30 }} >
            <Avatar rounded style={styles.avatar} source={e.photo} />
            <ListItem.Content >
                <ListItem.Title style={{ color: "blue" }}>{e.dej}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    ));

    diner = filter.map((e, i) => (
        <ListItem key={i} style={{ marginLeft: 30 }} >
            <Avatar rounded style={styles.avatar} source={e.photo} />
            <ListItem.Content >
                <ListItem.Title style={{ color: "blue" }}>{e.diner}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    ));

    if (loading || !fontsLoaded) {
        return (
            <View style={styles.loadingBox}>
                <Text style={styles.loadingText}>Attends... Ça charge !</Text>
            </View>
        )
    } else {

        return (
            <View style={styles.container}>

                <DropdownDates dateSelectedParent={dateSelected} />

                {/* <Button
                    type="solid"
                    buttonStyle={styles.button}
                    title="Menus"
                    titleStyle={{ fontSize: 13 }}
                    onPress={() => {

                    }}
                ></Button> */}
                <ScrollView>
                    <View style={{ marginTop: 20 }}></View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Ptit Dej</Text>
                    </View>
                    <View style={styles.mealBox}>
                        {breakfast}
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Dej</Text>
                    </View>
                    <View style={styles.mealBox}>
                        {lunch}
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Dîner</Text>
                    </View>
                    <View style={styles.mealBox}>
                        {diner}
                    </View>
                    <View style={{ marginBottom: 80 }}></View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"

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
        fontFamily: "DancingScript_400Regular",
        fontSize: 32
    },
    titleBox: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    mealBox: {
        marginBottom: 20,
    },
    button: {
        borderRadius: 20,
        backgroundColor: "#F94A56",
        width: 100,
        height: 35,
        alignSelf: "center",
        marginVertical: 5,
    },

});

