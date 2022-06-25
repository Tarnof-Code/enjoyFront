import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();


import UsefulNumbers from "../screens/Infos/UsefulNumbers";
import Regulations from "../screens/Infos/Regulations";
import Weather from "../screens/Infos/Weather";
import Header from '../Components/Header';

function TopTab() {

    return (
        <Tab.Navigator
            initialRouteName='UsefulNumbers'
            tabBarOptions={{
                activeTintColor: '#000000',
            }}
        >
            <Tab.Screen
                name="UsefulNumbers"
                component={UsefulNumbers}
                options={{
                    title: ({ focused }) => (
                        <Entypo
                            size={25}
                            name="old-phone"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Regulations"
                component={Regulations}
                options={{
                    title: ({ focused }) => (
                        <Entypo
                            size={25}
                            name="book"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Weather"
                component={Weather}
                options={{
                    title: ({ focused }) => (
                        <Ionicons
                            size={25}
                            name="sunny"
                            color={focused ? '#000000' : '#b2bec3'}
                        />
                    )
                }}
            />




        </Tab.Navigator>
    )
}

export default function TopTabInfos() {
    return (
        <SafeAreaProvider>
            <Header iconName="info-circle" title="Infos utiles" />
            <TopTab />
        </SafeAreaProvider>



    )


}