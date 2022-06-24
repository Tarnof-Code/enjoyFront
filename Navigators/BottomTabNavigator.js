import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from "../screens/First Screens/Login";
import Home from "../screens/First Screens/Home";

import TopTabActivities from "./TopTabActivities"
import TopTabPlannings from "./TopTabPlannings"
import TopTabLists from "./TopTabLists"
import TopTabHealth from './TopTabHealth';
import TopTabInfos from './TopTabInfos';

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
                    } else if (route.name === 'Infos utiles') {
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
            <Tab.Screen name="Listes" component={TopTabLists} />
            <Tab.Screen name="Plannings" component={TopTabPlannings} />
            <Tab.Screen name="Activités" component={TopTabActivities} />
            <Tab.Screen name="Sanitaire" component={TopTabHealth} />
            <Tab.Screen name="Infos utiles" component={TopTabInfos} />
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


