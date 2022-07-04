import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default function RoomDropdown(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [labels, setLabels] = useState([
        { label: "A1     EMY           6 Crabes filles", value: "A1" },
        { label: "A2     KHOUDEYI      6 Crabes filles", value: "A2" },
        { label: "A3     VANESSA       12 Poulpes filles", value: "A3" },
        { label: "A4     CANDICE       11 Requins filles", value: "A4" },
        { label: "A5     MAËVA         11 Requins filles", value: "A5" },
        { label: "B1     SAMIR         5 Requins garçons", value: "B1" },
        { label: "B2     Christian     5 Requins garçons", value: "B2" },
        { label: "B3     DELAIR        6 Crabes garçons", value: "B3" },
        { label: "B4     ROMAIN        5 Crabes garçons", value: "B4" },
        { label: "B5     BASTIEN       6 Sardines garçons", value: "B5" },
        { label: "B6     BASTIEN       5 Poulpes garçons", value: "B6" },
        { label: "B7     RUDY          6 Poulpes garçons", value: "B7" },
        { label: "B8     RUDY          6 Poulpes garçons", value: "B8" },
    ]);

    return (
        <View style={styles.dropdownBox}>
            <DropDownPicker
                listMode="SCROLLVIEW"
                style={styles.dropDownPicker}
                dropDownContainerStyle={{ width: "95%" }}
                open={open}
                value={value}
                items={labels}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setLabels}
                placeholder="Quelle chambre ?"
                placeholderStyle={{ color: "#576574", fontStyle: "italic" }}
                onChangeValue={(value) => {
                    props.bedroomSelectedParent(value);
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

