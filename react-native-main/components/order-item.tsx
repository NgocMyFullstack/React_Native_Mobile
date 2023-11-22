import { View, Text } from "react-native";
import { globalStyles } from "../assets/global-styles";
import { Divider } from "@gluestack-ui/themed";

interface OrderItemProps {
  title: string;
  children: any;
}

export const OrderItem = ({ title, children }: OrderItemProps) => {
  return (
    <View>
      <View
        style={[
          globalStyles.containerRow,
          { justifyContent: "space-between", backgroundColor: "#BDC3C7" },
        ]}
      >
        <Text style={globalStyles.text}>{title}</Text>
        {children}
      </View>
      <Divider
        style={{
          marginTop: 21,
        }}
      />
    </View>
  );
};
