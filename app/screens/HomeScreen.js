import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";

const avatar = require("../../assets/avatar.jpg");

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: Platform.OS == "android" ? 40 : 0 }}
    >
      {/* <StatusBar style="dark" backgroundColor="#0C0F14" /> */}
      <ScrollView
        style={{
          padding: SPACING,
        }}
      >
        <View
          style={{
            /* backgroundColor: "#151a20", */
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={colors.secondary}
              />
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING * 2,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: SPACING / 2,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: SPACING * 2,
                }}
                source={avatar}
              />
            </BlurView>
          </View>
        </View>
        <View style={{ width: "80%", marginVertical: SPACING * 3 }}>
          <Text style={{ color: colors.white, fontSize: SPACING * 3.5 }}>
            Find the best coffee for you
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
