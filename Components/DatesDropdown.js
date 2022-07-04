import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";


export default function DatesDropdown(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [labels, setLabels] = useState([
        { label: "Lundi 11", value: "11/07/2022" },
        { label: "Mardi 12", value: "12/07/2022" },
        { label: "Mercredi 13", value: "13/07/2022" },
        { label: "Jeudi 14", value: "14/07/2022" },
        { label: "Vendredi 15", value: "15/07/2022" },
        { label: "Samedi 16", value: "16/07/2022" },
        { label: "Dimanche 17", value: "17/07/2022" },
        { label: "Lundi 18", value: "18/07/2022" },
        { label: "Mardi 19", value: "19/07/2022" },
        { label: "Mercredi 20", value: "20/07/2022" },
        { label: "Jeudi 21", value: "21/07/2022" },
        { label: "Vendredi 22", value: "22/07/2022" },
        { label: "Samedi 23", value: "23/07/2022" },
        { label: "Dimanche 24", value: "24/07/2022" },
        { label: "Lundi 25", value: "25/07/2022" },
        { label: "Mardi 26", value: "26/07/2022" },
        { label: "Mercredi 27", value: "27/07/2022" },
        { label: "Jeudi 28", value: "28/07/2022" },
        { label: "Vendredi 29", value: "29/07/2022" },

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
                placeholder="Aujourd'hui"
                placeholderStyle={{ color: "#576574", fontStyle: "italic" }}
                onChangeValue={(value) => {
                    props.dateSelectedParent(value);
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
        borderLeftWidth: 4,
        borderColor: "#121851",
    },
})

