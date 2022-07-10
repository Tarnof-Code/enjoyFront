import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";


export default function AnimDropdown(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [labels, setLabels] = useState([
        { label: "Bastien           Car 2 / Voiture 7", value: "Bastien" },
        { label: "Candice           Car 2 / Voiture 7", value: "Candice" },
        { label: "Christian         Car 1 / Voiture 6", value: "Christian" },
        { label: "Emy               Car 1 / Voiture 6", value: "Emy" },
        { label: "Khoudeyi          Car 2 / Voiture 7", value: "Khoudeyi" },
        { label: "Maëva             Car 2 / Voiture 6", value: "Maëva" },
        { label: "Nicolas           Car 1 / Voiture 6", value: "Nicolas" },
        { label: "Romain            Car 1 / Voiture 6", value: "Romain" },
        { label: "Rudy              Car 2 / Voiture 7", value: "Rudy" },
        { label: "Samir             Car 1 / voiture 6", value: "Samir" },
        { label: "Vanessa           Car 1 / Voiture 6", value: "Vanessa" },
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
                placeholder="Quel animateur ?"
                placeholderStyle={{ color: "#576574", fontStyle: "italic" }}
                onChangeValue={(value) => {
                    props.animSelectedParent(value);
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

