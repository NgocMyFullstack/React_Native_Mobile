import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CupIcon from './icon/cup-icon';

interface VolumeProps {
    size: 'sm' | 'md' | 'lg';
    color?: string;
    onPress: () => void;
}

export const Volume: React.FC<VolumeProps> = ({ size, color = '#D8D8D8', onPress }) => {
    const sizes = {
        sm: {
            width: 17,
            height: 22,
            number: 250,
        },
        md: {
            width: 24,
            height: 31,
            number: 350,
        },
        lg: {
            width: 29,
            height: 38,
            number: 450,
        },
    };

    const { width, height, number } = sizes[size] || sizes.sm;

    return (
        <View
            style={{
                height: 67,
            }}
        >
            <TouchableOpacity
                onPress={onPress}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    rowGap: 8,
                    flex: 1,
                    marginTop: 'auto',
                }}
            >
                <CupIcon color={color} width={width} height={height} />
                <Text
                    style={[
                        { color },
                        { textAlign: 'center', fontSize: 14, fontFamily: 'Poppins500' },
                    ]}
                >
                    {number}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
