import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import User from "./components/User";
import { Button } from "react-native-web";
import LotsOfGreeting from "./components/LotsOfGreeting";
import MycustomTextWith from "./components/MycustomTextWith";
import Count from "./components/Count";
import InputText from "./components/InputText";
import UserNameandPassWord from "./components/UserNameandPassWord";

const App = () => {
  return (
    <View style= {styles.container}>
      {/* <Logo />
      <User /> */}
      {/* <LotsOfGreeting/> */}
      {/* <MycustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      <UserNameandPassWord/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  }
});
