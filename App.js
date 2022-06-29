import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cafe from "./components/Cafe";
import Cat from "./components/Cat";
import TextInputExample from "./components/TextInputExample";

export default function App() {
  return (
    <View >
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <TextInputExample /> */}
      {/* <Cat/> */}
      <Cafe/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
