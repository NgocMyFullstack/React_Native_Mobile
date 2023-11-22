import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { globalStyles } from "../assets/global-styles";
import { Divider } from "@gluestack-ui/themed";

export type Ref = BottomSheetModal; // khai báo Ref dữ lieeuk là BoottsheetModal

// Định nghĩa một giao diện (interface) có tên là "BottomSheetProps"
interface BottomSheetProps {
  title: string;
  data: string[];
  onPress: (name: string) => void;
  // Thuộc tính "onPress" có kiểu dữ liệu là một hàm (function)
  // Hàm này nhận một đối số có kiểu dữ liệu là chuỗi (string), và không có giá trị trả về (void)
}

const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => ["50%"], []);
    const [isPressed, setIsPressed] = useState(false);

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      []
    );

    const { dismiss } = useBottomSheetModal();

    const handlePress = (item: string) => {
      setIsPressed(true);
      props.onPress(`${item}`);
      dismiss();
    };

    const handleRelease = () => {
      setIsPressed(false);
      dismiss();
    };

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        overDragResistanceFactor={0}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{ display: "none" }}
        backgroundStyle={{ borderRadius: 25, backgroundColor: "white" }}
      >
        <View>
          <Text
            style={{
              color: "#AAA ",
              fontSize: 14,
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            {props.title}
          </Text>
          <View style={styles.itemContainer}>
            <Divider />
            <TouchableOpacity
              style={[styles.button, isPressed && styles.buttonPressed]}
              onPress={() => handlePress("None")}
              onPressOut={handleRelease}
            >
              <Text
                style={[
                  globalStyles.heading,
                  { fontFamily: "Poppins500", textAlign: "center" },
                ]}
              >
                None
              </Text>
            </TouchableOpacity>
          </View>
          {props.data.map((item, i) => (
            <View style={styles.itemContainer} key={i}>
              <Divider />
              <TouchableOpacity
                style={[styles.button, isPressed && styles.buttonPressed]}
                onPress={() => handlePress(item)}
                onPressOut={handleRelease}
              >
                <Text
                  style={[
                    globalStyles.heading,
                    { fontFamily: "Poppins500", textAlign: "center" },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.itemContainer}>
            <Divider />
            <TouchableOpacity
              style={{
                backgroundColor: "#FFE5E5",
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => dismiss()}
            >
              <Text
                style={[
                  globalStyles.heading,
                  { fontFamily: "Poppins500", textAlign: "center" },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    flex: 1,
    width: "100%",
    padding: 17,
  },
  buttonPressed: {
    backgroundColor: "#fafbfc",
    opacity: 80,
    width: "100%",
    height: "100%",
  },
  buttonText: {
    color: "#001833",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins500",
  },
  itemContainer: {
    minHeight: 60,
    width: "100%",
  },
});

export default BottomSheet;
