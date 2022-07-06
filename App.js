import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from "./Navigators/BottomTabNavigator";
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';

import OverlayReducer from './Reducers/OverlayReducer';
import animName from './Reducers/animNameReducer'

const store = createStore(combineReducers({ OverlayReducer, animName }));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <BottomTabNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}


