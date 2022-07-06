import React from "react";
import { Text, View } from "react-native";
import { Overlay } from "react-native-elements";
import { connect } from 'react-redux';

function BirthdayOverlay(props) {

    return (
        <Overlay
            overlayStyle={{ flex: 0.2, width: 250, borderRadius: 50 }}
            width="5000"
            isVisible={props.visible}
            onBackdropPress={() => {
                props.backDrop()
            }}
        >
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Text style={{ fontSize: 30, textAlign: "center" }}>Anniversaire le {props.date}</Text>
            </View>
        </Overlay>
    )

}

function mapStateToProps(state) {
    return { visible: state.OverlayReducer.visible, date: state.OverlayReducer.date };
}


function mapDispatchToProps(dispatch) {
    return {
        backDrop: function () {
            dispatch({ type: 'hide' })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BirthdayOverlay);

