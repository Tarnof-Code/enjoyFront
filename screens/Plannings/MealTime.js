import React, { useEffect, useState } from 'react';
import { ListItem, Avatar, Button, Overlay } from 'react-native-elements'
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
    const [mealList, setMealList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

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

            let brutMenus = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1NFaehdydHLoy92kiAoCuak3oRqg5PKY4U4E2ujIQkNU/values/menus_BDD!A1:S12?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y"
            );
            let menus = await brutMenus.json();


            let temp = [];
            let menuList = [];

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

            for (let i = 0; i < menus.values.length; i++) {
                menuList.push({
                    date: menus.values[i][0],
                    lunch1: menus.values[i][1],
                    lunch2: menus.values[i][2],
                    lunch3: menus.values[i][3],
                    lunch4: menus.values[i][4],
                    lunch5: menus.values[i][5],
                    dinner1: menus.values[i][7],
                    dinner2: menus.values[i][8],
                    dinner3: menus.values[i][9],
                    dinner4: menus.values[i][10],
                    dinner5: menus.values[i][11],
                })
            }

            setLoading(false);
            setPlanningMeals(temp);
            setMealList(menuList);
        }



        getMeals()


    }, [])

    let filter
    let breakfast
    let lunch
    let diner
    let filterMenu
    let lunchMenu
    let dinerMenu


    if (dateChoice === null) {
        let date = new Date()
        if (date < new Date("2022-07-12")) {
            date = new Date("2022-07-12")
        }
        let todayDate = moment(date).format("DD/MM/YYYY")

        filter = planningMeals.filter(meal => meal.date === todayDate)
        filterMenu = mealList.filter(meal => meal.date === todayDate)
    } else {
        filter = planningMeals.filter(meal => meal.date === dateChoice)
        filterMenu = mealList.filter(meal => meal.date === dateChoice)
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

    lunchMenu = filterMenu.map((e, i) => (
        <ListItem key={i} >
            <ListItem.Content >
                <ListItem.Title style={styles.detailsMenu}>{e.lunch1}</ListItem.Title>
                <ListItem.Title style={styles.detailsMenu}>{e.lunch2}</ListItem.Title>
                <ListItem.Title style={styles.detailsMenu}>{e.lunch3}</ListItem.Title>
                <ListItem.Title style={styles.detailsMenu}>{e.lunch4}</ListItem.Title>
                <ListItem.Title style={styles.detailsMenu}>{e.lunch5}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    ));

    dinerMenu = filterMenu.map((e, i) => (
        <ListItem key={i}  >
            <ListItem.Content >
                <ListItem.Title style={styles.detailsMenu}>{e.dinner1}</ListItem.Title>
                <ListItem.Title style={styles.detailsMenu}>{e.dinner2}</ListItem.Title>
                <ListItem.Title style={styles.detailsMenu}>{e.dinner3}</ListItem.Title>
                <ListItem.Title style={styles.detailsMenu}>{e.dinner4}</ListItem.Title>
                <ListItem.Title style={styles.detailsMenu}>{e.dinner5}</ListItem.Title>
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
                <Overlay
                    overlayStyle={{ flex: 0.3, width: "85%", minHeight: "85%", borderRadius: 50 }}
                    width="5000"
                    isVisible={isVisible}
                    onBackdropPress={() => {
                        setIsVisible(false);
                    }}
                >
                    <ScrollView>
                        <View style={{ alignItems: "center", justifyContent: "flex-start", flex: 1 }}>
                            <Text style={styles.titleOver}>Menus</Text>
                            <Text style={styles.subTitle}>Déjeûner</Text>
                            <View style={styles.menuStyle}>
                                {lunchMenu}
                            </View>
                            <Text style={styles.subTitle}>Dîner</Text>
                            <View style={styles.menuStyle}>
                                {dinerMenu}
                            </View>

                        </View>
                    </ScrollView>
                    <Button
                        title="Retour"
                        buttonStyle={styles.button}
                        titleStyle={{ fontSize: 13 }}
                        onPress={() => {
                            setIsVisible(false)
                        }}
                    >
                    </Button>
                    <View style={{ marginTop: 10 }}></View>
                </Overlay>
                <DropdownDates dateSelectedParent={dateSelected} />

                <Button
                    type="solid"
                    buttonStyle={styles.button}
                    title="Menus"
                    titleStyle={{ fontSize: 13 }}
                    onPress={() => {
                        setIsVisible(true)
                    }}
                ></Button>
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
        marginTop: 20,
    },
    titleOver: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 35,
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "blue",
    },
    menuStyle: {

        width: "100%",
    },
    detailsMenu: {
        fontSize: 22,
        fontFamily: "DancingScript_400Regular",
        alignSelf: "center"
    }


});

