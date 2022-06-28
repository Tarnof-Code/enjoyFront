import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

export default function RoomDropdown(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [labels, setLabels] = useState([
        { label: "A1", value: "A01" },
        { label: "A2", value: "A02" },
        { label: "A3", value: "A03" },
        { label: "A4", value: "A04" },
        { label: "A5", value: "A05" },
        { label: "B1", value: "B01" },
        { label: "B2", value: "B02" },
        { label: "B3", value: "B03" },
        { label: "B4", value: "B04" },
        { label: "B5", value: "B05" },
        { label: "B6", value: "B06" },
        { label: "B7", value: "B07" },
        { label: "B8", value: "B08" },
    ]);

    const [choice, setChoice] = useState(null);



    return (
        <View style={styles.dropdownBox}>
            <DropDownPicker
                listMode="SCROLLVIEW"
                style={styles.dropDownPicker}
                dropDownContainerStyle={{ width: 150 }}
                open={open}
                value={value}
                items={labels}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setLabels}
                placeholder="Chambre"
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

