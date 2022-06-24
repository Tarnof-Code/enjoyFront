import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function General(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Liste générale</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cd84f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});