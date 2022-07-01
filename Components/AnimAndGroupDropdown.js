import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";


export default function AnimAndGroupDropdown(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [labels, setLabels] = useState([
        { label: "Tous", value: "Tous" },
        { label: "Crabes", value: "Crabes" },
        { label: "Requins", value: "Requins" },
        { label: "Poulpes", value: "Poulpes" },
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


    return (
        <View style={styles.dropdownBox}>
            <DropDownPicker
                listMode="SCROLLVIEW"
                style={styles.dropDownPicker}
                dropDownContainerStyle={{ width: "95%", }}
                open={open}
                value={value}
                items={labels}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setLabels}
                placeholder="Choisir anim / groupe"
                placeholderStyle={{ color: "#576574", fontStyle: "italic" }}
                onChangeValue={(value) => {
                    props.animOrGroupSelectedParent(value);
                }}
            />
        </View>
    )



};

const styles = StyleSheet.create({
    dropDownPicker: {
        width: "95%",
        marginTop: 6,
        marginBottom: 6,
        zIndex: -1,
        borderRadius: 8,
        borderColor: "#121851",
    },
    dropdownBox: {
        justifyContent: 'center',
        alignItems: 'center',

    }

})

