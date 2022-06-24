import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Sharks(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Liste requins</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32ff7e',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
