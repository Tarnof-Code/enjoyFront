import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function MealTime(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Repas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1abc9c',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
