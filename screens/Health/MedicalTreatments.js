import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function MedicalTreatments(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: "white" }}>Traitements</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0984e3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
