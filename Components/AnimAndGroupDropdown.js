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
    ]);


    return (
        <View>
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
                placeholder="Quel groupe ?"
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
        // marginTop: 6,
        marginBottom: 6,
        zIndex: -1,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderColor: "#121851",
    },

})

