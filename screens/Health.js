import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function health(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Sanitaire</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00cec9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
