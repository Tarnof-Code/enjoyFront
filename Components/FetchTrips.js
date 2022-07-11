import React, { useEffect, useState } from 'react';
import { ListItem, Button, Overlay, Badge } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')

import GroupDropdown from './GroupDropdown';
import DropdownGroup from './DropdownGroup';
import CheckList from './CheckList';

export default function FetchTrips(props) {

    const [tripList, setTripsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [groupChoice, setGroupChoice] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [date, setDate] = useState(null);
    const [tripName, setTripName] = useState(null);
    const [departure, setDeparture] = useState(null);
    const [comeBack, setComeBack] = useState(null);
    const [url, setUrl] = useState(null);


    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
    });

    var groupSelected = (groupSelect) => {
        setGroupChoice(groupSelect);
    };

    useEffect(() => {
        async function getTrips() {
            let brutResponse1 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Sorties!B1:H6?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response1 = await brutResponse1.json();

            let brutResponse2 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Sorties!B8:J13?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response2 = await brutResponse2.json();

            let brutResponse3 = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1dAhxW5yE38KIV21JkKbWCXqO70QzUZKJhANNESywXsc/values/Sorties!B15:J20?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response3 = await brutResponse3.json();


            let temp = [];

            for (let i = 0; i < response1.values.length; i++) {
                temp.push({
                    date: moment(new Date(response1.values[i][0])).format("dddd DD MMM YYYY"),
                    group: response1.values[i][1],
                    trip: response1.values[i][2],
                    departure: response1.values[i][3],
                    comeBack: response1.values[i][4],
                    Link: response1.values[i][5],
                });
            };

            for (let j = 0; j < response2.values.length; j++) {
                temp.push({
                    date: moment(new Date(response2.values[j][0])).format("dddd DD MMM YYYY"),
                    group: response2.values[j][1],
                    trip: response2.values[j][2],
                    departure: response2.values[j][3],
                    comeBack: response2.values[j][4],
                    Link: response2.values[j][5],
                });

            };

            for (let k = 0; k < response3.values.length; k++) {
                temp.push({
                    date: moment(new Date(response3.values[k][0])).format("dddd DD MMM YYYY"),
                    group: response3.values[k][1],
                    trip: response3.values[k][2],
                    departure: response3.values[k][3],
                    comeBack: response3.values[k][4],
                    Link: response3.values[k][5],
                });
            };


            setLoading(false);
            setTripsList(temp);
        }



        getTrips()


    }, [])

    let filter
    let filteredList


    filter = tripList.filter(trip => trip.group === groupChoice)


    filteredList = filter.map((e, i) => (
        <ListItem key={i}  >
            <ListItem.Content style={styles.listStyle}>
                <View>
                    <ListItem.Title style={styles.dateStyle}>{e.date}</ListItem.Title>
                    <ListItem.Title style={styles.titleStyle}>{e.trip}</ListItem.Title>
                </View>
                <Button
                    type="solid"
                    buttonStyle={styles.button}
                    title="Détails"
                    titleStyle={{ fontSize: 10 }}
                    onPress={() => {
                        setIsVisible(true);
                        setDate(e.date);
                        setTripName(e.trip);
                        setDeparture(e.departure);
                        setComeBack(e.comeBack);
                        setUrl(e.Link);
                    }}
                ></Button>
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

                <Overlay
                    overlayStyle={{ flex: 0.2, width: "80%", minHeight: "30%", borderRadius: 50 }}
                    width="5000"
                    isVisible={isVisible}
                    onBackdropPress={() => {
                        setIsVisible(false);
                    }}
                >
                    <View style={{ alignItems: "center", justifyContent: "flex-start", flex: 1 }}>
                        <Text style={styles.titleOver}>{tripName}</Text>
                        <Text style={styles.dateOver}>{date}</Text>
                        <Text style={styles.infosOver}>Départ : {departure}</Text>
                        <Text style={styles.infosOver}>Retour : {comeBack}</Text>
                        <Text
                            onPress={() => Linking.openURL(url)}
                            style={styles.link}
                        >Lien vers le site
                        </Text>
                    </View>
                </Overlay>

                <Overlay
                    overlayStyle={{ flex: 0.2, width: "70%", minHeight: "65%", borderRadius: 50 }}
                    width="5000"
                    isVisible={isVisible2}
                    onBackdropPress={() => {
                        setIsVisible2(false);
                    }}
                >
                    <View style={{ alignItems: "center", justifyContent: "flex-start", flex: 1 }}>
                        <Text style={styles.titleOver}>Check-List</Text>
                        <CheckList />
                    </View>
                </Overlay>


                <DropdownGroup groupSelectedParent={groupSelected} />

                <Badge
                    value="CheckList"
                    badgeStyle={styles.badge}
                    onPress={() => {
                        setIsVisible2(true);
                    }}
                />
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
    listStyle: {
        backgroundColor: "#0E0E66",
        borderRadius: 10,
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,

    },
    dateStyle: {
        fontSize: 14,
        color: "white",
        marginLeft: 20,
    },
    titleStyle: {
        fontFamily: "DancingScript_400Regular",
        color: "white",
        marginLeft: 20,
        fontSize: 24,
    },
    titleOver: {
        fontFamily: "DancingScript_400Regular",
        fontSize: 35,
        marginBottom: 20,
    },
    dateOver: {
        fontSize: 15,
        marginBottom: 20,
        fontWeight: "bold",
    },
    infosOver: {
        margin: 15,
        fontSize: 18,
    },
    button: {
        borderRadius: 5,
        backgroundColor: "#F94A56",
        width: 65,
        height: 32,
        marginRight: 20,
    },
    link: {
        fontSize: 20,
        color: "blue",
        marginTop: 30,
        fontWeight: "bold",
        fontStyle: "italic",

    },
    badge: {
        backgroundColor: "#F94A56",
        width: 130,
        height: 40,
        marginBottom: 5,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: "#FFFFFF",


    }
});

