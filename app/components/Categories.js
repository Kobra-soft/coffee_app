import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import categories from "../config/categories";
import colors from "../config/colors";
import SPACING from "../config/SPACING";

const Categories = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ marginVertical: SPACING * 2 }}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ marginRight: SPACING * 2 }}>
          <Text
            style={[
              { color: colors.secondary, fontSize: SPACING * 2 },
              activeCategoryId === item.id && { color: colors.primary },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
