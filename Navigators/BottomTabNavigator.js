import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from "../screens/Login";
import Home from "../screens/Home";
import Listes from "../screens/Listes";
import Plannings from "../screens/Plannings";
import Health from "../screens/Health";
import Infos from "../screens/Infos"

import TopTabActivities from "./TopTabActivities"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if (route.name === 'Listes') {
                        iconName = 'list-ul'
                    } else if (route.name === 'Plannings') {
                        iconName = 'calendar-alt'
                    } else if (route.name === 'Activités') {
                        iconName = 'dice'
                    } else if (route.name === 'Sanitaire') {
                        iconName = 'notes-medical'
                    } else if (route.name === 'Infos') {
                        iconName = 'info-circle'
                    }
                    return <FontAwesome5 name={iconName} size={25} color={color} />;

                },
            })}

            tabBarOptions={{
                activeTintColor: '#000000',
                inactiveTintColor: '#b2bec3',
                // showLabel: false,
            }}
        >
            <Tab.Screen options={{ tabBarButton: () => null }} name="Home" component={Home} />
            <Tab.Screen name="Listes" component={Listes} />
            <Tab.Screen name="Plannings" component={Plannings} />
            <Tab.Screen name="Activités" component={TopTabActivities} />
            <Tab.Screen name="Sanitaire" component={Health} />
            <Tab.Screen name="Infos" component={Infos} />
        </Tab.Navigator>

    )
}


export default function BottomTabNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


