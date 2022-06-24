import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function GeneralHealth(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Infos générales</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#55efc4',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
