import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../assets/global-styles";
import { Link } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const MenuHeader = () => {
  const { user } = useUser();

  if (!user) return null;

  const firstName = user.firstName;
  const lastName = user.lastName;

  if (!firstName || !lastName) return "user";

  const fullname = firstName + lastName;

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 40,
        marginBottom: 10,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Text style={globalStyles.subtitle}>Welcome!</Text>
        <Text
          style={{
            fontFamily: "Poppins500",
            fontSize: 16,
          }}
        >
          {fullname}
        </Text> */}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 22,
        }}
      >
        <Link href="/profile">
          <Ionicons name="person-outline" size={29} color="#000" />
        </Link>
        <Link href="/cart">
          <Ionicons name="cart-outline" size={32} color="#000" />
        </Link>
      </View>
    </View>
  );
};

export default MenuHeader;
