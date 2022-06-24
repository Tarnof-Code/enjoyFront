import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function UsefulNumbers(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Numéros utiles</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fc5c65',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
