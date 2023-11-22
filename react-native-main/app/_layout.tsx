import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Slot, SplashScreen, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

const CLERK_PUBLISHABLE_KEY = 'pk_test_bW92aW5nLWFudC0yMy5jbGVyay5hY2NvdW50cy5kZXYk';

const InitialLayout = () => {
    const { isLoaded, isSignedIn } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return;

        const inTabsGroup = segments[0] === '(routes)';

        if (isSignedIn && !inTabsGroup) {
            router.replace('/home');
        } else if (!isSignedIn) {
            router.replace('/');
        }
    }, [isSignedIn]);

    return <Slot />;
};

const tokenCache = {
    async getToken(key: string) {
        try {
            return SecureStore.getItemAsync(key);
        } catch (err) {
            return null;
        }
    },
    async saveToken(key: string, value: string) {
        try {
            return SecureStore.setItemAsync(key, value);
        } catch (err) {
            return;
        }
    },
};

function RootLayout() {
    const [loaded, error] = useFonts({
        Poppins400: require('../assets/fonts/Poppins-Regular.ttf'),
        Poppins500: require('../assets/fonts/Poppins-Medium.ttf'),
        Poppins600: require('../assets/fonts/Poppins-SemiBold.ttf'),
        ReenieBeanie: require('../assets/fonts/Reenie-Beanie.ttf'),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
            <InitialLayout />
        </ClerkProvider>
    );
}

export default RootLayout;
