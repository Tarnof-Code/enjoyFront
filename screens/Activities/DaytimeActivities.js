import { SafeAreaProvider } from 'react-native-safe-area-context';

import FetchActivities from "../../Components/FetchActivities";



export default function DaytimeActivities(props) {
    return (

        <SafeAreaProvider>
            <FetchActivities />
        </SafeAreaProvider>
    );
}