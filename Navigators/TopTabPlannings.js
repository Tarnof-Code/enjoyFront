import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();


import Holidays from "../screens/Plannings/Holidays";
import Laundry from "../screens/Plannings/Laundry";
import MealTime from "../screens/Plannings/MealTime";
import Surveillance from "../screens/Plannings/Surveillance";
import WakeUp from "../screens/Plannings/WakeUp";
import Header from '../Components/Header';


function TopTab() {

    return (
        <Tab.Navigator
            initialRouteName='WakeUp'
            tabBarOptions={{
                activeTintColor: '#000000',
            }}
        >
            <Tab.Screen
                name="WakeUp"
                component={WakeUp}
                options={{
                    title: ({ focused }) => (
                        <Ionicons
                            size={25}
                            name="alarm"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="MealTime"
                component={MealTime}
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
                name="Surveillance"
                component={Surveillance}
                options={{
                    title: ({ focused }) => (
                        <MaterialIcons
                            size={25}
                            name="local-police"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Laundry"
                component={Laundry}
                options={{
                    title: ({ focused }) => (
                        <MaterialIcons
                            size={25}
                            name="local-laundry-service"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Holidays"
                component={Holidays}
                options={{
                    title: ({ focused }) => (
                        <Fontisto
                            size={25}
                            name="holiday-village"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />




        </Tab.Navigator>
    )
}

export default function TopTabPlannings() {
    return (
        <SafeAreaProvider>
            <Header iconName="calendar-alt" title="Plannings" />
            <TopTab />
        </SafeAreaProvider>



    )


}