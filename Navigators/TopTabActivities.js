import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();


import DaytimeActivities from "../screens/Activities/DaytimeActivities";
import EveningActivities from "../screens/Activities/EveningActivities";
import Trips from "../screens/Activities/Trips";
import Header from '../Components/Header';

function TopTab() {

    return (
        <Tab.Navigator
            initialRouteName='DaytimeActivities'
            tabBarOptions={{
                activeTintColor: '#000000',
            }}
        >
            <Tab.Screen
                name="DaytimeActivities"
                component={DaytimeActivities}
                options={{
                    title: ({ focused }) => (
                        <MaterialIcons
                            size={25}
                            name="sports-kabaddi"
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
            <Header iconName="dice" title="  Activités" />
            <TopTab />
        </SafeAreaProvider>



    )


}