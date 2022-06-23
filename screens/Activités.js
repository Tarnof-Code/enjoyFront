import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Activités(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Activités</Text>
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
