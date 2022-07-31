import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';


const data = [
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
];

const DropdownDates = (props) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    return (
        <View style={styles.container}>

            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                // search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Aujourd'hui" : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    props.dateSelectedParent(item.value);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color={isFocus ? 'blue' : 'black'}
                        name="Safety"
                        size={20}
                    />
                )}
            />
        </View>
    );
};

export default DropdownDates;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});