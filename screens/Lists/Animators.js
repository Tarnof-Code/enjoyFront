import { SafeAreaProvider } from 'react-native-safe-area-context';

import FetchLists from "../../Components/FetchLists";



export default function Animator(props) {
    return (

        <SafeAreaProvider>
            <FetchLists group="animators" />
        </SafeAreaProvider>
    );
}