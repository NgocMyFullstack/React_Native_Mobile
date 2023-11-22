import React, { useMemo, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import StoreIcon from "./icon/store-icon";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useFetch } from "../hook/use-fetch";
import { Restaurant } from "../types";
import { useProductData } from "../hook/use-product-data";

const HomeBottomSheet = () => {
  const { data } = useFetch<Restaurant>({ endpoint: "restaurants" });
  const { setRestaurantId } = useProductData();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["7%", "35%"], []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ opacity: 0 }}
      backgroundStyle={{
        margin: 0,
        backgroundColor: "#3D5F6C",
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
      }}
    >
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ zIndex: 200 }}
      >
        <View style={styles.contentContainer}>
          <Text
            style={{
              color: "white",
              fontSize: 19,
              fontFamily: "Poppins600",
            }}
          >
            Select Magic Coffee store
          </Text>
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#fff",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              paddingVertical: 21,
              marginTop: 20,
              zIndex: 300,
              paddingHorizontal: 30,
              display: "flex",
              flexDirection: "column",
              rowGap: 20,
            }}
          >
            {data.map((restaurant) => (
              <SheetItem
                key={restaurant.id}
                id={restaurant.id}
                title={restaurant.name}
                onPress={() => setRestaurantId(restaurant.id)}
              />
            ))}
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

interface SheetItemProps {
  id: string;
  title: string;
  onPress: () => void;
}

const SheetItem = ({ id, title, onPress }: SheetItemProps) => {
  return (
    <Link href={{ pathname: "/menu", params: { id } }} asChild>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            backgroundColor: "#C58BF2",
            borderRadius: 17,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 18,
            paddingVertical: 15,
            width: "100%",
            position: "relative",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 11,
              width: "100%",
            }}
          >
            <StoreIcon />
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins600",
              }}
            >
              {title}
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={23}
            color="white"
            style={{
              position: "absolute",
              right: 10,
              top: "56%",
            }}
          />
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    zIndex: 300,
  },
});

export default HomeBottomSheet;
