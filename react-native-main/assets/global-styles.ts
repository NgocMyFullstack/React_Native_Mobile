import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  title: {
    color: "#181D2D",
    fontSize: 22,
    marginBottom: 24,
    fontFamily: "Poppins500",
  },
  subtitle: {
    color: "#AAA",
    fontSize: 14,
    fontFamily: "Poppins400",
  },
  flexCenter: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerRow: {
    flex: 1,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    color: "#001833",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Poppins600",
  },
  text: {
    color: "#001833",
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Poppins500",
  },
  isActive: {
    color: "red",
  },
  inActive: {
    color: "black",
  },
});
