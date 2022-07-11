import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';


const data = [
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
];

const DropdownAnim = (props) => {
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
                placeholder={!isFocus ? "Quelle chambre ?" : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    props.bedroomSelectedParent(item.value);
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

export default DropdownAnim;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
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