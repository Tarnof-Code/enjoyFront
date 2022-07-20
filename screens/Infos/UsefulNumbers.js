import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Linking, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements'

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';

import DropdownNumbers from '../../Components/DropdownNumbers';

export default function UsefulNumbers(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [numberChoice, setNumberChoice] = useState(null);

    let [fontsLoaded] = useFonts({
        DancingScript_400Regular
    });

    var numberSelected = (numberSelect) => {
        setNumberChoice(numberSelect);
    };

    function makeCall(phone) {
        if (Platform.OS === 'android') {
            Linking.openURL(`tel:${phone}`);
        } else {
            Linking.openURL(`telprompt:${phone}`);
        }
    };

    useEffect(() => {
        async function getData() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/1GQCO4RCKe1mfMVfXOBi5AVFmvJx6m5n8TEBdkCxEG40/values/numbers!A1:D40?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y"
            );
            let response = await brutResponse.json();

            let temp = [];
            for (let i = 0; i < response.values.length; i++) {
                temp.push({
                    label: response.values[i][0],
                    name: response.values[i][1],
                    number: response.values[i][2],
                    comment: response.values[i][3]
                });
            }

            setLoading(false);
            setData(temp);
        }
        getData()
    }, []);

    let filteredNumbers
    let choice
    console.log(numberChoice)
    if (numberChoice === "Equipe" || numberChoice === null) {
        choice = data.filter((e) => e.label === "Equipe")
    } else if (numberChoice === "Administration") {
        choice = data.filter((e) => e.label === "Administration")
    } else if (numberChoice === "Activités") {
        choice = data.filter((e) => e.label === "Activités")
    }

    filteredNumbers = choice.map((e, i) => (
        <ListItem key={i} bottomDivider>
            <ListItem.Content style={styles.listStyle}>
                <View>
                    <ListItem.Title style={{ color: "blue" }}>{e.name}</ListItem.Title>
                    <ListItem.Title style={{ color: "green" }}>{e.number}</ListItem.Title>
                </View>
                <Button
                    type="solid"
                    buttonStyle={styles.button}
                    title="Appeler"
                    titleStyle={{ fontSize: 10 }}
                    onPress={() => {
                        makeCall(e.number);
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
                <DropdownNumbers numberSelectedParent={numberSelected} />
                <ScrollView>
                    {filteredNumbers}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    listStyle: {
        borderRadius: 10,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,

    },
    button: {
        borderRadius: 5,
        backgroundColor: "#F94A56",
        width: 65,
        height: 32,
        marginRight: 20,
    },
    loadingBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: '400',
    },

});
