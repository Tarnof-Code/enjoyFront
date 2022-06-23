import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Listes(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Listes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b59b6',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
