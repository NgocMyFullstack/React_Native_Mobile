import { ArrowLeftIcon, GluestackUIProvider, config } from '@gluestack-ui/themed';
import { Stack, useNavigation } from 'expo-router';
import MenuHeader from '../../components/menu-header';
import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const LogoutButton = () => {
    const { signOut } = useAuth();

    const doLogout = () => {
        signOut();
    };

    return (
        <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
            <Ionicons name='log-out-outline' size={24} color={'#000'} />
        </Pressable>
    );
};

const MainLayout = () => {
    const { isSignedIn } = useAuth();
    const navigate = useNavigation();

    return (
        <GluestackUIProvider config={config.theme}>
            <Stack>
                <Stack.Screen
                    name='home'
                    options={{
                        headerShown: false,
                    }}
                    redirect={!isSignedIn}
                />
                <Stack.Screen
                    name='menu'
                    options={{
                        header: () => <MenuHeader />,
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: '#fff',
                        headerBackTitle: 'Back',
                    }}
                    redirect={!isSignedIn}
                />
                <Stack.Screen
                    name='cart'
                    options={{
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: '#000',
                        headerBackTitle: 'Back',
                        headerTitle: 'Cart',
                        headerLeft: () => (
                            <TouchableOpacity onPress={navigate.goBack}>
                                <ArrowLeftIcon />
                            </TouchableOpacity>
                        ),
                    }}
                    redirect={!isSignedIn}
                />
                <Stack.Screen
                    name='orderId'
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: '#fff',
                        headerBackTitle: 'Back',
                    }}
                    redirect={!isSignedIn}
                />
                <Stack.Screen
                    name='profile'
                    options={{
                        headerRight: () => <LogoutButton />,
                        headerLeft: () => (
                            <TouchableOpacity onPress={navigate.goBack}>
                                <ArrowLeftIcon />
                            </TouchableOpacity>
                        ),
                        headerTitle: 'Profile',
                    }}
                    redirect={!isSignedIn}
                />
                <Stack.Screen
                    name='order-success'
                    options={{
                        headerShown: false,
                    }}
                    redirect={!isSignedIn}
                />
            </Stack>
        </GluestackUIProvider>
    );
};

export default MainLayout;
