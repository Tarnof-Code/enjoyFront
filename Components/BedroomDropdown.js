import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default function RoomDropdown(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [labels, setLabels] = useState([
        { label: "A1     EMY           ", value: "A1" },
        { label: "A2     KHOUDEYI      ", value: "A2" },
        { label: "A3     VANESSA       ", value: "A3" },
        { label: "A4     CANDICE       ", value: "A4" },
        { label: "A5     MAËVA         ", value: "A5" },
        { label: "B1     SAMIR         ", value: "B1" },
        { label: "B2     Christian     ", value: "B2" },
        { label: "B3     DELAIR        ", value: "B3" },
        { label: "B4     ROMAIN        ", value: "B4" },
        { label: "B5     BASTIEN       ", value: "B5" },
        { label: "B6     BASTIEN       ", value: "B6" },
        { label: "B7     RUDY          ", value: "B7" },
        { label: "B8     RUDY          ", value: "B8" },
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

