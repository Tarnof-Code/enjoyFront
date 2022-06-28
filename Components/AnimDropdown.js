import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";


export default function AnimDropdown(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [labels, setLabels] = useState([
        { label: "Bastien", value: "Bastien" },
        { label: "Candice", value: "Candice" },
        { label: "Christian", value: "Christian" },
        { label: "Emy", value: "Emy" },
        { label: "Khoudeyi", value: "Khoudeyi" },
        { label: "Maëva", value: "Maëva" },
        { label: "Nicolas", value: "Nicolas" },
        { label: "Romain", value: "Romain" },
        { label: "Rudy", value: "Rudy" },
        { label: "Samir", value: "Samir" },
        { label: "Vanessa", value: "Vanessa" },
    ]);

    const [choice, setChoice] = useState(null);



    return (
        <View style={styles.dropdownBox}>
            <DropDownPicker
                listMode="SCROLLVIEW"
                style={styles.dropDownPicker}
                dropDownContainerStyle={{ width: 150, }}
                open={open}
                value={value}
                items={labels}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setLabels}
                placeholder="Animateur"
                placeholderStyle={{ color: "#576574", fontStyle: "italic" }}
                onChangeValue={(value) => {
                    setChoice(value);
                }}
            />
        </View>
    )



};

const styles = StyleSheet.create({
    dropDownPicker: {
        width: 150,
        marginTop: 10,
        zIndex: -1,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderColor: "#121851",
        borderWidth: 0,
    },
    dropdownBox: {
        justifyContent: 'center',
        alignItems: 'center',

    }

})

