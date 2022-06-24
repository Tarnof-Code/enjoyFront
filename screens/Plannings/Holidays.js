import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Holidays(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Congés</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1c40f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
