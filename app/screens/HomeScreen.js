import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import React from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";

const avatar = require("../../assets/avatar.jpg");

const { width } = Dimensions.get("window");

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
              borderRadius: 5,
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
              borderRadius: SPACING * 0.5,
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
        <View
          style={{
            /* backgroundColor: "red", */
            width: "65%",
            marginVertical: SPACING * 3,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 3.5,
              fontWeight: "600",
              fontFamily: "Poppins-SemiBold",
              lineHeight: 42,
            }}
          >
            Find the best coffee for you
          </Text>
        </View>
        <SearchField />
        <Categories style={styles.categoriesText} />

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {coffees.map((coffee) => (
            <View
              key={coffee.id}
              style={{
                width: width / 2 - SPACING * 2,
                marginBottom: SPACING,
                borderRadius: SPACING * 2,
                overflow: "hidden",
              }}
            >
              <BlurView
                tint="dark"
                intensity={95}
                style={{
                  padding: SPACING,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 150,
                    width: "100%",
                  }}
                >
                  <Image
                    source={coffee.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: SPACING * 2,
                    }}
                  />

                  <View
                    style={{
                      position: "absolute",
                      right: 0,
                      borderBottomStartRadius: SPACING * 3,
                      borderTopEndRadius: SPACING * 2,
                      overflow: "hidden",
                    }}
                  >
                    <BlurView
                      tint="dark"
                      intensity={70}
                      style={{
                        flexDirection: "row",
                        padding: SPACING - 2,
                      }}
                    >
                      <Ionicons
                        style={{ marginLeft: SPACING / 2 }}
                        name="star"
                        color={colors.primary}
                        size={SPACING * 1.7}
                      />
                      <Text
                        style={{
                          color: colors.white,
                          marginLeft: SPACING / 2,
                        }}
                      >
                        {coffee.rating}
                      </Text>
                    </BlurView>
                  </View>
                </TouchableOpacity>
                <Text style={{ color: colors.white }}>{coffee.name}</Text>
                <Text style={{ color: colors.white }}>{coffee.included}</Text>
              </BlurView>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
