import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Octopuses(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Liste poulpes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4d4d',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
