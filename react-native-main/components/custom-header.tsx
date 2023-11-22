import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "./Themed";
import { globalStyles } from "../assets/global-styles";
import { Link } from "expo-router";

const CustomHeader = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,

        backgroundColor: "white",
        paddingVertical: 5,
        paddingTop: 40,
      }}
    >
      <Link href="/menu">
        <Ionicons name="arrow-back" size={24} color="#000" />
      </Link>
      <Text style={globalStyles.heading}>Order</Text>
      <Link href="/carta">
        <Ionicons name="cart-outline" size={24} color="#000" />
      </Link>
    </View>
  );
};

export default CustomHeader;
