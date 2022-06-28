import FetchLists from "../../Components/FetchLists";
import { SafeAreaProvider } from 'react-native-safe-area-context';




export default function Crabs(props) {
    return (

        <SafeAreaProvider>
            <FetchLists group="CRABES" />
        </SafeAreaProvider>
    );
}