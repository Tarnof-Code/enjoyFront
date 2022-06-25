import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";

export default function Animators(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Liste Animateurs</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7efff5',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
