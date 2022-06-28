import FetchLists from "../../Components/FetchLists";
import { SafeAreaProvider } from 'react-native-safe-area-context';




export default function General(props) {
    return (

        <SafeAreaProvider>
            <FetchLists group="General" />
        </SafeAreaProvider>
    );
}
