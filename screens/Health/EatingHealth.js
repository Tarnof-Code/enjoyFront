import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function EeatingHealth(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Alimentaire</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e84393',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
