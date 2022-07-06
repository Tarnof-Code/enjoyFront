import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CheckList() {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);

    return (
        <SafeAreaProvider>
            <CheckBox
                status={checked1 ? "checked" : "unchecked"}
                value={checked1}
                checked={checked1}
                title="Téléphone chargé"
                checkedColor="#F94A56"
                onPress={() => {
                    setChecked1(!checked1);
                }}
            />
            <CheckBox
                status={checked2 ? "checked" : "unchecked"}
                value={checked2}
                checked={checked2}
                title="Fiches sanitaires"
                checkedColor="#F94A56"
                onPress={() => {
                    setChecked2(!checked2);
                }}
            />
            <CheckBox
                status={checked3 ? "checked" : "unchecked"}
                value={checked3}
                checked={checked3}
                title="Trousse à pharmacie"
                checkedColor="#F94A56"
                onPress={() => {
                    setChecked3(!checked3);
                }}
            />
            <CheckBox
                status={checked4 ? "checked" : "unchecked"}
                value={checked4}
                checked={checked4}
                title="Traitements"
                checkedColor="#F94A56"
                onPress={() => {
                    setChecked4(!checked4);
                }}
            />
            <CheckBox
                status={checked5 ? "checked" : "unchecked"}
                value={checked5}
                checked={checked5}
                title="Eau"
                checkedColor="#F94A56"
                onPress={() => {
                    setChecked5(!checked5);
                }}
            />
            <CheckBox
                status={checked6 ? "checked" : "unchecked"}
                value={checked6}
                checked={checked6}
                title="Crème solaire"
                checkedColor="#F94A56"
                onPress={() => {
                    setChecked6(!checked6);
                }}
            />
            <CheckBox
                status={checked7 ? "checked" : "unchecked"}
                value={checked7}
                checked={checked7}
                title="Pique-niques"
                checkedColor="#F94A56"
                onPress={() => {
                    setChecked7(!checked7);
                }}
            />
        </SafeAreaProvider>
    )



}