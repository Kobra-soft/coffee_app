import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
