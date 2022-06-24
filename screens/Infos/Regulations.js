import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Regulations(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Réglementation</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4b6584',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
