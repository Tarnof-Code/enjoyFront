import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Button, CheckBox } from "react-native-elements";

import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { PTSans_400Regular } from '@expo-google-fonts/pt-sans';

import Icon from "react-native-vector-icons/Ionicons";

export default function Login(props) {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [checked, setChecked] = useState(false);


    let [fontsLoaded] = useFonts({
        DancingScript_400Regular,
        Roboto_400Regular,
        PTSans_400Regular
    });

    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}> Enjoy </Text>
                    <Text style={styles.subTitle}> Connexion </Text>

                    <View style={styles.inputContainer}>
                        <Icon name="people" color="#121851" size={30} />
                        <TextInput
                            placeholder="Nom de l'animateur"
                            style={styles.input}
                            underlineColor="transparent"
                            value={mail}
                            onChangeText={(value) => setMail(value)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name={passwordVisible ? "eye-off" : "eye"}
                            color="#121851"
                            size={30}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                        <TextInput
                            placeholder="Mot de passe"
                            style={styles.input}
                            autoCorrect={false}
                            secureTextEntry={passwordVisible}
                            underlineColor="transparent"
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                        />
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            status={checked ? "checked" : "unchecked"}
                            value={checked}
                            checked={checked}
                            // color={checked ? "#5BAA62" : undefined}
                            checkedColor="#F94A56"
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Text style={styles.textCheckbox}>Se souvenir de moi</Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Button
                            type="solid"
                            buttonStyle={styles.button}
                            title="Se connecter"
                            onPress={() => {
                                props.navigation.navigate('BottomTab', { screen: "Home" });
                            }}
                        ></Button>
                    </View>

                </ScrollView >
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#121851',
        alignItems: 'center',
    },
    title: {
        fontSize: 100, color: "white",
        fontFamily: 'DancingScript_400Regular',
        marginTop: 60,
        textAlign: "center"
    },
    subTitle: {
        fontSize: 30, color: "white",
        fontFamily: 'Roboto_400Regular',
        marginTop: 60,
        marginBottom: 30,
        textAlign: "center"
    },
    input: {
        fontFamily: "PTSans_400Regular",
        margin: 20,
        padding: 10,
        borderRadius: 5,
        width: 200,
        height: 40,
        backgroundColor: "white"
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "white",
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 20,
        borderRadius: 8,
        height: 50,
        width: 300,
    },
    button: {
        borderRadius: 40,
        size: "md",
        backgroundColor: "#F94A56",
        width: 180,
        height: 50,
        margin: 30,
        marginTop: 60
    },
    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        marginLeft: -10,
        marginTop: 10

    },
    textCheckbox: {
        color: "#ffffff",
        fontFamily: "PTSans_400Regular",
        marginLeft: -20,
    },
});