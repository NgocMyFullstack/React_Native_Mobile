import React from "react";
import { globalStyles } from "../assets/global-styles";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { ProductItemType } from "../types";

interface CartItem {
  data: ProductItemType;
}

export const CartItem = ({ data }: CartItem) => {
  return (
    <View style={[styles.task]}>
      <Image
        style={{
          width: 82,
          height: 61,
          objectFit: "cover",
        }}
        source={{ uri: data.image }}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: 3,
        }}
      >
        <Text style={globalStyles.text}>{data.name}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          <Text style={[globalStyles.subtitle, { fontSize: 10 }]}>
            {data.carryingOption} | {data.volumeOption} | {data.iceOption}
          </Text>
          <Text style={[globalStyles.subtitle, { fontSize: 10 }]}>
            {data.syrup} | {data.milk}
          </Text>
        </View>
        <Text style={globalStyles.text}>x{data.amount}</Text>
      </View>

      <Text style={[globalStyles.heading, { fontSize: 16 }]}>
        {data.amount * data.price}$
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    alignItems: "center",
  },
  task: {
    backgroundColor: "#f7f8fb",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 18,
    marginBottom: 21,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  iconContainer: {
    right: "10%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
