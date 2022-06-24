import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Crabs(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Liste Crabes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
});