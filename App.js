import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./components/BottomTabNavigator"
// import TopTabNavigator from "./components/TopTabNavigator"



export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}


