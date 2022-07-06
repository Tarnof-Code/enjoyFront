import { SafeAreaProvider } from 'react-native-safe-area-context';

import FetchTrips from "../../Components/FetchTrips";



export default function DaytimeActivities(props) {
    return (

        <SafeAreaProvider>
            <FetchTrips />
        </SafeAreaProvider>
    );
}
