import { View, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { useSignIn } from '@clerk/clerk-expo';
import InputForm from '../../components/input-form';
import { GluestackUIProvider, LockIcon, MailIcon, config } from '@gluestack-ui/themed';
import { ContinueButton } from '../../components/continue-button';
import Heading from '../../components/heading';
import ShieldIcon from '../../components/icon/shield-icon';

const ResetPassword = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [successfulCreation, setSuccessfulCreation] = useState(false);
    const { signIn, setActive } = useSignIn();

    if (!signIn) return null;

    const onRequestReset = async () => {
        try {
            await signIn.create({
                strategy: 'reset_password_email_code',
                identifier: emailAddress,
            });
            setSuccessfulCreation(true);
        } catch (err: any) {
            alert(err.errors[0].message);
        }
    };

    const onReset = async () => {
        try {
            const result = await signIn.attemptFirstFactor({
                strategy: 'reset_password_email_code',
                code,
                password,
            });

            await setActive({ session: result.createdSessionId });
        } catch (err: any) {
            alert(err.errors[0].message);
        }
    };

    return (
        <GluestackUIProvider config={config.theme}>
            <View style={styles.container}>
                <Stack.Screen options={{ headerBackVisible: !successfulCreation }} />

                {!successfulCreation && (
                    <View
                        style={{
                            backgroundColor: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '100%',
                            rowGap: 30,
                            height: '100%',
                            position: 'relative',
                        }}
                    >
                        <Heading title='Forgot Password' subtitle='Enter your email address' />
                        <InputForm
                            icon={MailIcon}
                            placeholder='Email address'
                            value={emailAddress}
                            onChangeText={setEmailAddress}
                        />

                        <View
                            style={{
                                position: 'absolute',
                                right: 30,
                                bottom: 150,
                            }}
                        >
                            <ContinueButton onPress={onRequestReset} />
                        </View>
                    </View>
                )}

                {successfulCreation && (
                    <>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '100%',
                                rowGap: 30,
                                height: '100%',
                                position: 'relative',
                            }}
                        >
                            <InputForm
                                icon={MailIcon}
                                placeholder='Enter your code'
                                value={code}
                                onChangeText={setCode}
                            />
                            <InputForm
                                icon={ShieldIcon}
                                placeholder='New password'
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                right: 40,
                                bottom: 150,
                            }}
                        >
                            <ContinueButton onPress={onReset} />
                        </View>
                    </>
                )}
            </View>
        </GluestackUIProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 48,
        height: '100%',
        paddingHorizontal: 41,
        paddingTop: 46,
        paddingBottom: 71,
        position: 'relative',
        backgroundColor: '#fff',
    },
    inputField: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: '#6c47ff',
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    },
    button: {
        margin: 8,
        alignItems: 'center',
    },
});

export default ResetPassword;
