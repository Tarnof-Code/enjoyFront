import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from "./Navigators/BottomTabNavigator";
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';

import birthdayOverlayReducer from './Reducers/birthdayOverlayReducer';

const store = createStore(combineReducers({ birthdayOverlayReducer }));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <BottomTabNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}


