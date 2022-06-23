import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();


import DaytimeActivities from "../screens/DaytimeActivities";
import EveningActivities from "../screens/EveningActivities";
import Trips from "../screens/Trips";

function TopTab() {

    return (
        <Tab.Navigator
            initialRouteName='ActiDay'
            tabBarOptions={{
                activeTintColor: '#000000',
            }}
        >
            <Tab.Screen
                name="DaytimeActivities"
                component={DaytimeActivities}
                options={{
                    title: ({ focused }) => (
                        <MaterialCommunityIcons
                            size={25}
                            name="baseball-bat"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="EveningActivities"
                component={EveningActivities}
                options={{
                    title: ({ focused }) => (
                        <Ionicons
                            size={25}
                            name="md-moon"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Trips"
                component={Trips}
                options={{
                    title: ({ focused }) => (
                        <MaterialCommunityIcons
                            size={25}
                            name="bus"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />




        </Tab.Navigator>
    )
}

export default function TopTabActivities() {
    return (
        <SafeAreaProvider>
            <View style={{ height: 110, backgroundColor: "#ffffff" }}></View>
            <TopTab />
        </SafeAreaProvider>



    )


}