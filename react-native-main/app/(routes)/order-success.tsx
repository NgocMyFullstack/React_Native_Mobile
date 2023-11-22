import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { globalStyles } from '../../assets/global-styles';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useEffect, useRef } from 'react';

const OrderSuccessScreen = () => {
    const animationRef = useRef<LottieView>(null);

    useEffect(() => {
        animationRef.current?.play();

        animationRef.current?.play(0, 300);
    }, []);

    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 200,
            }}
        >
            <LottieView
                style={{
                    width: 300,
                    height: 200,
                }}
                ref={animationRef}
                source={require('../../assets/images/success-payment.json')}
            />
            <Animated.Text entering={FadeIn.duration(400).delay(400)} style={globalStyles.heading}>
                Thank you for your order
            </Animated.Text>
        </View>
    );
};

export default OrderSuccessScreen;
