import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d63031',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
