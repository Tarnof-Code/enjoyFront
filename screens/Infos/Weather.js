import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Weather(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Météo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26de81',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
