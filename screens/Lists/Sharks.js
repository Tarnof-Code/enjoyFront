import FetchLists from "../../Components/FetchLists";
import { SafeAreaProvider } from 'react-native-safe-area-context';




export default function Sharks(props) {
    return (

        <SafeAreaProvider>
            <FetchLists group="REQUINS" />
        </SafeAreaProvider>
    );
}