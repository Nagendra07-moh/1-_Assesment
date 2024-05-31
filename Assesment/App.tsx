import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./src/redux/store/store";
import { Provider } from "react-redux";
import Navigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
