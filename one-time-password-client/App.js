import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { config } from "./utils";

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUp />
        <SignIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
