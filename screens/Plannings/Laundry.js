import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')



export default function Laundry(props) {

    const [laundryList, setLaundryList] = useState([]);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        async function getData() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1j7gUBnEqWy0IZxqrRZ9fFrJbqYDG3fmfTvSzYEp06v0/values/Lessives_BDD!A1:B7?dateTimeRenderOption=FORMATTED_STRING&majorDimension=COLUMNS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y "
            );
            let response = await brutResponse.json();

            let temp = [];
            for (let i = 0; i < response.values.length; i++) {
                temp.push({
                    bat: response.values[i][0],
                    date1: response.values[i][1],
                    date2: response.values[i][2],
                    date3: response.values[i][3],
                    date4: response.values[i][4],
                    date5: response.values[i][5],
                    date6: response.values[i][6],
                })

            }



            setLoading(false);
            setLaundryList(temp);
        }



        getData()


    }, [])


    let batA

    batA = laundryList.map((e, i) => (
        <ListItem key={i} style={{ marginTop: 10 }} >
            <ListItem.Content >
                <ListItem.Title style={styles.title}>{e.bat}</ListItem.Title>
                <ListItem.Title style={styles.dates}>{e.date1}</ListItem.Title>
                <ListItem.Title style={styles.dates}>{e.date2}</ListItem.Title>
                <ListItem.Title style={styles.dates}>{e.date3}</ListItem.Title>
                <ListItem.Title style={styles.dates}>{e.date4}</ListItem.Title>
                <ListItem.Title style={styles.dates}>{e.date5}</ListItem.Title>
                <ListItem.Title style={styles.dates}>{e.date6}</ListItem.Title>
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
                    {batA}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

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
    title: {
        alignSelf: "center",
        fontFamily: "DancingScript_400Regular",
        fontSize: 35,
        marginBottom: 5,
    },
    dates: {
        alignSelf: "center",
        color: "blue",
    }
});

