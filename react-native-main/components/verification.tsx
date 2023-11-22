import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import Heading from './heading';

interface EmailVerificationProps {
    onVerify: (code: string) => void;
}

export const EmailVerification = ({ onVerify }: EmailVerificationProps) => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const inputRefs: React.RefObject<TextInput>[] = Array(6)
        .fill(null)
        .map(() => useRef<TextInput | null>(null));
    const [focusedInput, setFocusedInput] = useState<number | null>(null);

    useEffect(() => {
        if (focusedInput !== null && focusedInput < 5) {
            inputRefs[focusedInput + 1]?.current?.focus();
        }
    }, [focusedInput]);

    const handleCodeInput = (inputValue: string, index: number) => {
        if (inputValue === '') {
            const newCode = [...verificationCode];
            newCode[index] = '';

            setVerificationCode(newCode);

            if (index > 0) {
                const prevInput = inputRefs[index - 1];
                if (prevInput) {
                    prevInput.current?.focus();
                }
            }
        } else if (inputValue.length === 1) {
            const newCode = [...verificationCode];
            newCode[index] = inputValue;

            if (index < 5) {
                const nextInput = inputRefs[index + 1];
                if (nextInput) {
                    nextInput.current?.focus();
                }
            }

            setVerificationCode(newCode);

            if (index === 5) {
                const code = newCode.join('');
                onVerify(code);
            }
        }
    };

    return (
        <View>
            <View
                style={{
                    paddingHorizontal: 41,
                }}
            >
                <Heading title='Verification' subtitle='Enter the OTP code we sent you' />
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    position: 'relative',
                    marginTop: 37,
                }}
            >
                {verificationCode.map((char, index) => (
                        <TextInput
                        key={index}
                        value={char}
                        ref={inputRefs[index]}
                        onChangeText={(value) => handleCodeInput(value, index)}
                        maxLength={1}
                        keyboardType='numeric'
                        style={{
                            width: 54,
                            height: 54,
                            borderRadius: 10,
                            backgroundColor: '#F7F8FB',
                            fontSize: 40,
                            textAlign: 'center',
                        }}
                    />
                ))}
            </View>
        </View>
    );
};
