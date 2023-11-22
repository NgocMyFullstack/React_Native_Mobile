import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigateButton } from "../components/navigate-button";
import { ContinueButton } from "../components/continue-button";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";

const StartPage = () => {
  const router = useRouter();

  return (
    <GluestackUIProvider config={config.theme}>
      <View
        style={{
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            backgroundColor: "#324A59",
            width: "100%",
            height: 323,
            top: -69,
            position: "relative",
          }}
        >
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "../images/logo.png",
            }}
          />

          <Text style={styles.heading}>Magic Coffee</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              marginBottom: 53,
            }}
          >
            <Text style={styles.title}>Feel your self like a barista!</Text>
            <Text style={styles.subtitle}>Magic coffee an order</Text>
          </View>
          <NavigateButton />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: -350,
            right: 40,
            zIndex: 100,
          }}
        >
          <ContinueButton onPress={() => router.push("/sign-in")} />
        </View>
      </View>
    </GluestackUIProvider>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: "100%",
    height: "100%",
    top: 10,
  },
  title: {
    width: 239,
    color: "#181D2D",
    fontSize: 28,
    textAlign: "center",
    margin: 0,
    fontFamily: "Poppins400",
  },
  subtitle: {
    color: "#AAA",
    fontSize: 18,
    width: 256,
    textAlign: "center",
    margin: 0,
    fontFamily: "Poppins400",
  },
  heading: {
    margin: 0,
    color: "white",
    textAlign: "center",
    fontSize: 64,
    fontWeight: "500",
    fontFamily: "ReenieBeanie",
    position: "absolute",
    top: 191,
    width: "100%",
  },
});

export default StartPage;
