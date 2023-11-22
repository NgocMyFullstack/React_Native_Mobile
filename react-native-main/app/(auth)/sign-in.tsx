import Heading from "../../components/heading";
import InputForm from "../../components/input-form";
import { LockIcon, MailIcon } from "@gluestack-ui/themed";
import { ContinueButton } from "../../components/continue-button";
import { globalStyles } from "../../assets/global-styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { useSignIn } from "@clerk/clerk-expo";
import { Pressable } from "react-native";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: 48,
        height: "100%",
        paddingHorizontal: 41,
        paddingTop: 46,
        paddingBottom: 71,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 99,
        }}
      >
        <Spinner visible={loading} />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          rowGap: 30,
          height: "100%",
          position: "relative",
          top: -80,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#324A59",
            fontSize: 32,
            fontFamily: "Poppins500",

            right: 130,
            top: 70,
          }}
        >
          Sign in
        </Text>
        <Heading title="" subtitle="Welcome back" />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: 37,
          }}
        >
          <InputForm
            icon={MailIcon}
            placeholder="Enter your email"
            value={emailAddress}
            onChangeText={setEmailAddress}
          />
          <InputForm
            icon={LockIcon}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Link
          href="/reset"
          asChild
          style={{
            marginTop: 20,
          }}
        >
          <Pressable>
            <Text
              style={{
                textAlign: "center",
                color: "#324A59",
                fontSize: 14,
                fontFamily: "Poppins500",
                textDecorationLine: "underline",
                right: -100,
                top: -30,
              }}
            >
              Forgot password?
            </Text>
          </Pressable>
        </Link>
      </View>

      <View
        style={{
          position: "absolute",
          top: "90%",
          right: 30,
        }}
      >
        <ContinueButton onPress={onSignInPress} />
      </View>
      <Text
        style={[
          globalStyles.subtitle,
          {
            bottom: 40,
            alignItems: "flex-end",
            position: "absolute",
          },
        ]}
      >
        New member?{" "}
        <Link href="/(auth)/sign-up" asChild>
          <Text
            style={{
              color: "#324A59",
              fontSize: 14,
              fontFamily: "Poppins500",
            }}
          >
            Sign up
          </Text>
        </Link>
      </Text>
    </View>
  );
};

export default SignIn;
