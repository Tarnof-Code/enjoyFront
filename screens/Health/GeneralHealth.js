import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function GeneralHealth(props) {

    useEffect(() => {
        async function fetchData() {
            let brutResponse = await fetch(
                "https://sheets.googleapis.com/v4/spreadsheets/18apjvwYBXrfsfhY9q3m00pyhWVI1McJccgvdCOXaJ_M/values/Pour BDD!A2:G91?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBZXkEFqMLe991haSx1XOJcA3oqPaJlI-Y"
            );
            let response = await brutResponse.json();
            console.log(response.values);
        }
        fetchData();
    }, []);



    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Infos générales</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#55efc4',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
