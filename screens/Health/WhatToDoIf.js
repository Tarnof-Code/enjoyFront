import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function WhatToDoIf(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Que faire si...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffeaa7',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
