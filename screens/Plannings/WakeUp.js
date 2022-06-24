import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function WakeUp(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Lever</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e17055',
        alignItems: 'center',
        justifyContent: 'center',
    },
});