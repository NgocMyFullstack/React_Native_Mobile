import React from 'react';
import { Stack, useNavigation } from 'expo-router';
import { ArrowLeftIcon, GluestackUIProvider, config } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PublicLayout = () => {
    const navigation = useNavigation();

    return (
        <GluestackUIProvider config={config.theme}>
            <Stack>
                <Stack.Screen
                    name='sign-in'
                    options={{
                        headerLeft: () => (
                            <TouchableOpacity onPress={navigation.goBack}>
                                <ArrowLeftIcon />
                            </TouchableOpacity>
                        ),
                        headerTitle: '',
                    }}
                />
                <Stack.Screen
                    name='sign-up'
                    options={{
                        headerLeft: () => (
                            <TouchableOpacity onPress={navigation.goBack}>
                                <ArrowLeftIcon />
                            </TouchableOpacity>
                        ),
                        headerTitle: '',
                    }}
                />
                <Stack.Screen
                    name='reset'
                    options={{
                        headerTitle: '',
                    }}
                />
            </Stack>
        </GluestackUIProvider>
    );
};

export default PublicLayout;
