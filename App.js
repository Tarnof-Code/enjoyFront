import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from "./Navigators/BottomTabNavigator"




export default function App() {
  return (
    <SafeAreaProvider>
      <BottomTabNavigator />
    </SafeAreaProvider>
  );
}


