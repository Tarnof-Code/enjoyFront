import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default function RoomDropdown(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [labels, setLabels] = useState([
        { label: "A1", value: "A1" },
        { label: "A2", value: "A2" },
        { label: "A3", value: "A3" },
        { label: "A4", value: "A4" },
        { label: "A5", value: "A5" },
        { label: "B1", value: "B1" },
        { label: "B2", value: "B2" },
        { label: "B3", value: "B3" },
        { label: "B4", value: "B4" },
        { label: "B5", value: "B5" },
        { label: "B6", value: "B6" },
        { label: "B7", value: "B7" },
        { label: "B8", value: "B8" },
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

