import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Plannings(props) {
    return (

        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Plannings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
