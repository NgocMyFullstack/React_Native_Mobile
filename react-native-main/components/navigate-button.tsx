import { Link } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export const NavigateButton = () => {
    return (
        <View
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
            }}
        >
            <View style={styles.circleActive} />
            <Link href='/sign-in'>
                <View style={styles.circle} />
            </Link>
            <Link href='/sign-up'>
                <View style={styles.circle} />
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    circle: {
        width: 10,
        height: 10,
        borderRadius: 9999,
        flexShrink: 0,
        backgroundColor: '#d6dbde',
    },
    circleActive: {
        width: 33,
        height: 10,
        borderRadius: 9999,
        flexShrink: 0,
        backgroundColor: '#324A59',
    },
});
