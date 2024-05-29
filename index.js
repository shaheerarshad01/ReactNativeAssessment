/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import store from "./src/store";
import { NativeBaseProvider } from "native-base";

const StoreWrapper = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NativeBaseProvider>
  );
};
AppRegistry.registerComponent(appName, () => StoreWrapper);
