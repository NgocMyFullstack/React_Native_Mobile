import { ButtonSpinner } from '@gluestack-ui/themed';
import { useCallback, useEffect, useState } from 'react';
import { Image, View, Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import HomeBottomSheet from '../../components/home-bottom-sheet';
import LocationSearch from '../../components/location-search';

export const LogoutButton = () => {
    const { signOut } = useAuth();

    const doLogout = () => {
        signOut();
    };

    return (
        <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
            <Ionicons name='log-out-outline' size={24} color={'#fff'} />
        </Pressable>
    );
};

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        useCallback(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }, []),
    );

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Image
                    source={require('../../assets/images/homepage-background.png')}
                    style={{
                        width: '100%',
                        height: '100%',
                        flex: 1,
                        objectFit: 'cover',
                    }}
                />

                <View
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <ButtonSpinner
                        mr='$1'
                        size='large'
                        style={{
                            position: 'absolute',
                            bottom: 100,
                        }}
                        color='white'
                    />
                </View>
            </View>
        );
    }

    return (
        <View
            style={{
                paddingTop: 30,
                height: '100%',
                backgroundColor: '#d6d6d6',
            }}
        >
            <LocationSearch />
            <HomeBottomSheet />
        </View>
    );
};

export default HomePage;
