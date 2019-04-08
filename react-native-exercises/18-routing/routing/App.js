/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView
} from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import RickMorty from "../routing/RickMorty";
import Menu from "../routing/Menu";
import UserDirectory from "../routing/UserDirectory";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <NativeRouter>
          <Route exact path="/" component={Menu} />
          <Route exact path="/RickMorty" component={RickMorty} />
          <Route exact path="/UserDirectory" component={UserDirectory} />
        </NativeRouter>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
