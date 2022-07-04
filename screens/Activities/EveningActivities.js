import { SafeAreaProvider } from 'react-native-safe-area-context';

import FetchEvening from "../../Components/FetchEvening";



export default function EveningActivities(props) {
    return (

        <SafeAreaProvider>
            <FetchEvening />
        </SafeAreaProvider>
    );
}
