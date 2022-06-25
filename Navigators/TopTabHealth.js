import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();


import GeneralHealth from "../screens/Health/GeneralHealth";
import EatingHealth from "../screens/Health/EatingHealth";
import MedicalTreatments from "../screens/Health/MedicalTreatments";
import WhatToDoIf from "../screens/Health/WhatToDoIf";
import Header from '../Components/Header';



function TopTab() {

    return (
        <Tab.Navigator
            initialRouteName='GeneralHealth'
            tabBarOptions={{
                activeTintColor: '#000000',
            }}
        >
            <Tab.Screen
                name="GeneralHealth"
                component={GeneralHealth}
                options={{
                    title: ({ focused }) => (
                        <Foundation
                            size={25}
                            name="torsos-all"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="EatingHealth"
                component={EatingHealth}
                options={{
                    title: ({ focused }) => (
                        <MaterialCommunityIcons
                            size={25}
                            name="silverware-fork-knife"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="MedicalTreatments"
                component={MedicalTreatments}
                options={{
                    title: ({ focused }) => (
                        <MaterialCommunityIcons
                            size={25}
                            name="pill"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="WhatToDoIf"
                component={WhatToDoIf}
                options={{
                    title: ({ focused }) => (
                        <MaterialCommunityIcons
                            size={25}
                            name="account-question"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />





        </Tab.Navigator>
    )
}

export default function TopTabHealth() {
    return (
        <SafeAreaProvider>
            <Header iconName="notes-medical" title="Sanitaire" />
            <TopTab />
        </SafeAreaProvider>



    )


}