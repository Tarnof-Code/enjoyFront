import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Bedrooms(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Liste chambres</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9f1a',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
