import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  IBMPlexSans_100Thin,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

const App = () => {
  let [fontsLoaded, error] = useFonts({
    ibm_thin: IBMPlexSans_100Thin,
    ibm_extralight: IBMPlexSans_200ExtraLight,
    ibm_light: IBMPlexSans_300Light,
    ibm_regular: IBMPlexSans_400Regular,
    ibm_medium: IBMPlexSans_500Medium,
    ibm_semibold: IBMPlexSans_600SemiBold,
    ibm_bold: IBMPlexSans_700Bold,
    "Poppins-Black": require("./assets/fonts/Poppins_900Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins_700Bold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins_200ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins_300Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins_500Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins_400Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins_600SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins_100Thin.ttf"),

    "Stratos-Black": require("./assets/fonts/Stratos-Black.otf"),
    "Stratos-Bold": require("./assets/fonts/Stratos-Bold.otf"),
    "Stratos-ExtraBold": require("./assets/fonts/Stratos-ExtraBold.otf"),
    "Stratos-ExtraLight": require("./assets/fonts/Stratos-ExtraLight.otf"),
    "Stratos-Light": require("./assets/fonts/Stratos-Light.otf"),
    "Stratos-Medium": require("./assets/fonts/Stratos-Medium.otf"),
    "Stratos-Regular": require("./assets/fonts/Stratos-Regular.otf"),
    "Stratos-SemiBold": require("./assets/fonts/Stratos-SemiBold.otf"),
    "Stratos-SemiLight": require("./assets/fonts/Stratos-SemiLight.otf"),
    "Stratos-Thin": require("./assets/fonts/Stratos-Thin.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <StatusBar style="dark" backgroundColor="#0C0F14" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
