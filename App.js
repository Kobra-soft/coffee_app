import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import coffees from "./app/config/coffees";
/* import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; */
import TestScreen from "./app/screens/TestScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import HomeScreen from "./app/screens/HomeScreen";

/* const Stack = createNativeStackNavigator(); */

import {
  IBMPlexSans_100Thin,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

const App = () => {
  let [fontsLoaded, error] = useFonts({
    /*     ibm_thin: IBMPlexSans_100Thin,
    ibm_extralight: IBMPlexSans_200ExtraLight,
    ibm_light: IBMPlexSans_300Light,
    ibm_regular: IBMPlexSans_400Regular,
    ibm_medium: IBMPlexSans_500Medium,
    ibm_semibold: IBMPlexSans_600SemiBold,
    ibm_bold: IBMPlexSans_700Bold, */

    poppins_thin: Poppins_100Thin,
    poppins_extralight: Poppins_200ExtraLight,
    poppins_light: Poppins_300Light,
    poppins_regular: Poppins_400Regular,
    poppins_medium: Poppins_500Medium,
    poppins_semibold: Poppins_600SemiBold,
    poppins_bold: Poppins_700Bold,
    poppins_black: Poppins_900Black,

    /*     "Poppins-Black": require("./assets/fonts/Poppins_900Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins_700Bold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins_200ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins_300Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins_500Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins_400Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins_600SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins_100Thin.ttf"), */

    bebas_reg: require("./assets/fonts/BebasNeue-Regular.ttf"),
    bebas_bold: require("./assets/fonts/BebasNeue-Bold.ttf"),

    /*     "Stratos-Black": require("./assets/fonts/Stratos-Black.otf"),
    "Stratos-Bold": require("./assets/fonts/Stratos-Bold.otf"),
    "Stratos-ExtraBold": require("./assets/fonts/Stratos-ExtraBold.otf"),
    "Stratos-ExtraLight": require("./assets/fonts/Stratos-ExtraLight.otf"),
    "Stratos-Light": require("./assets/fonts/Stratos-Light.otf"),
    "Stratos-Medium": require("./assets/fonts/Stratos-Medium.otf"),
    "Stratos-Regular": require("./assets/fonts/Stratos-Regular.otf"),
    "Stratos-SemiBold": require("./assets/fonts/Stratos-SemiBold.otf"),
    "Stratos-SemiLight": require("./assets/fonts/Stratos-SemiLight.otf"),
    "Stratos-Thin": require("./assets/fonts/Stratos-Thin.otf"), */
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // <HomeScreen> and <CoffeeDetailsScreen> are the only screens that are done so far.
  // To test / view screens! Uncomment the screen you want to view below and comment out the other one.

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <StatusBar style="light" backgroundColor="#0C0F14" />
      {/* <HomeScreen /> */}
      <CoffeeDetailsScreen coffee={coffees[4]} />
    </SafeAreaView>

    // NAVIGATION to be added later!!! (after all screens are done) Commented out for now...

    /*     <NavigationContainer>
      <StatusBar style="light" backgroundColor="#0C0F14" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Coffee"
          component={CoffeeDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer> */
  );
};

export default App;

const styles = StyleSheet.create({});
