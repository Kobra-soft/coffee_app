import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { Ionicons } from "@expo/vector-icons";

const SearchField = () => {
  return (
    <View
      style={{
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: Platform.OS == "android" ? 0 : 0,
          color: "white",
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Search Coffee..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          style={{
            position: "absolute",
            left: Platform.OS == "android" ? SPACING * 1.5 : SPACING * 1.75,
          }}
          name="search"
          color={colors.light}
          size={SPACING * 2.25}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  textInput: {
    color: "white",
    width: "100%",
    fontSize: SPACING * 1.9,
    /* fontFamily: "", */
    textAlign: "left",
    alignItems: "center",
    padding: SPACING,
    paddingLeft: Platform.OS == "android" ? SPACING * 5 : SPACING * 5.25,
  },
});
