import { View, Text, TouchableOpacity } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import Spinner from "react-native-loading-spinner-overlay";
import { useState } from "react";
import { Link } from "expo-router";
import { ContinueButton } from "../../components/continue-button";
import { globalStyles } from "../../assets/global-styles";
import { LockIcon, MailIcon } from "@gluestack-ui/themed";
import InputForm from "../../components/input-form";
import Heading from "../../components/heading";
import { EmailVerification } from "../../components/verification";
import ProfileIcon from "../../components/icon/profile-icon";

const Register = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [pendingVerification, setPendingVerification] = useState(false);

  const [loading, setLoading] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async (code: string) => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
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

      {!pendingVerification && (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              rowGap: 30,
              height: "100%",
              position: "relative",
              top: -120,
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
            <Heading title="" subtitle="Create an account here" />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                rowGap: 37,
              }}
            >
              <InputForm
                icon={ProfileIcon}
                placeholder="Enter your first name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <InputForm
                icon={ProfileIcon}
                placeholder="Enter your last name"
                value={lastName}
                onChangeText={setLastName}
              />
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
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#324A59",
                    fontSize: 12,
                    fontFamily: "Poppins400",
                  }}
                >
                  By signing up you agree with our Terms of Use
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
          <View
            style={{
              position: "absolute",
              right: 40,
              bottom: "18%",
              zIndex: 30,
              top: "95%",
            }}
          >
            <ContinueButton onPress={onSignUpPress} />
          </View>
          <Text
            style={[
              globalStyles.subtitle,
              {
                alignItems: "flex-end",
                position: "absolute",
                bottom: 40,
              },
            ]}
          >
            Already member?{" "}
            <Link href="/(auth)/sign-in" asChild>
              <Text
                style={{
                  color: "#324A59",
                  fontSize: 14,
                  fontFamily: "Poppins500",
                }}
              >
                Sign in
              </Text>
            </Link>
          </Text>
        </>
      )}

      {pendingVerification && <EmailVerification onVerify={onPressVerify} />}
    </View>
  );
};

export default Register;
