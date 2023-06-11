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
import React, { useState } from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";

const avatar = require("../../assets/avatar.jpg");
const avatar3 = require("../../assets/avatar3.png");

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: Platform.OS == "android" ? 40 : 0 }}
    >
      {/* <StatusBar style="dark" backgroundColor="#0C0F14" /> */}
      <View
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
              backgroundColor: colors.secondary,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="menu" size={SPACING * 2.5} color={"#0C0F14"} />
            </BlurView>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.secondary,
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
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
                    borderColor: "#0C0F14",
                    borderWidth: 1,
                  }}
                  source={avatar}
                />
              </BlurView>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{
            marginVertical: SPACING * 0,
            marginTop: SPACING * 3,
            /* paddingTop: SPACING * 1.5, */
            marginBottom: SPACING * 0,
            top: -16,
          }}
        >
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
                /* fontFamily: "Poppins-SemiBold", */
                fontFamily: "poppins_semibold",
                lineHeight: 42,
              }}
            >
              Find the best coffee for you
            </Text>
          </View>
          <SearchField />
          <Categories onChange={(id) => setActiveCategoryId(id)} />

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {coffees
              .filter((coffee) => {
                if (activeCategoryId === null) {
                  return true;
                }
                return coffee.categoryId === activeCategoryId;
              })
              .map((coffee) => (
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
                    <Text
                      numberOfLines={2}
                      style={{
                        color: colors.white,
                        fontWeight: "600",
                        fontSize: SPACING * 1.7,
                        marginTop: SPACING,
                        marginBottom: SPACING / 2,
                      }}
                    >
                      {coffee.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: colors.secondary,
                        fontSize: SPACING * 1.2,
                      }}
                    >
                      {coffee.included}
                    </Text>

                    <View
                      style={{
                        marginVertical: SPACING / 2,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            color: colors.primary,
                            marginRight: SPACING / 2,
                            fontSize: SPACING * 1.6,
                          }}
                        >
                          £
                        </Text>
                        <Text
                          style={{
                            color: colors.white,
                            fontSize: SPACING * 1.6,
                          }}
                        >
                          {coffee.price}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          backgroundColor: colors.primary,
                          padding: SPACING / 2,
                          borderRadius: SPACING,
                        }}
                      >
                        <Ionicons
                          name="add"
                          size={SPACING * 2}
                          color={colors.white}
                        />
                      </TouchableOpacity>
                    </View>
                  </BlurView>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
