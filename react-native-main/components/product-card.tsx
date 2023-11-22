import { Link } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
}

export const ProductCard = ({ id, image, name }: ProductCardProps) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400).delay(200)}
      style={{ minHeight: 110, maxHeight: 110 }}
    >
      <Link href={{ pathname: "/orderId", params: { id } }} asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "#BDC3C7",
            padding: 20,
            borderRadius: 15,
            width: 170,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginTop: -10,
              top: -3,
              fontFamily: "Poppins500",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
            numberOfLines={2}
          >
            {name}
          </Text>
          <Image
            style={{
              width: 152,
              height: 146,
              objectFit: "cover",
              borderRadius: 12,
              backgroundColor: "white",
            }}
            source={{ uri: image }}
          />
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
};
