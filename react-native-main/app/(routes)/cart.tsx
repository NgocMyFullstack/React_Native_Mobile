import { ArrowLeftIcon } from '@gluestack-ui/themed';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../../assets/global-styles';
import { CartItem } from '../../components/cart-item';
import SwipeableRow from '../../components/swipeable-row';
import useCartStore from '../../hook/use-cart';
import { Link, useRouter } from 'expo-router';
import { useProductData } from '../../hook/use-product-data';
import axios from 'axios';

const Cart = () => {
    const router = useRouter();
    const { cart, totalPrice, removeFromCart, removeAll } = useCartStore();
    const { restaurantId } = useProductData();

    const values = [
        {
            total: totalPrice,
            orderDetails: cart.map((item) => ({
                syrup: item.syrup,
                milk: item.milk,
                price: item.price,
                quantity: item.amount,
                coffee: { id: item.id },
            })),
        },
    ];

    const handleSubmit = async () => {
        try {
            await axios.post('http://192.168.1.137:8080/api/orders', values);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRouter = () => {
        router.push('/order-success');
        handleSubmit();

        setTimeout(() => {
            removeAll();
        }, 500);
    };

    if (cart.length === 0) {
        return (
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: 32,
                    flex: 1,
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                }}
            >
                <Image source={require('../../assets/images/empty-cart.png')} />
                <Text
                    style={{
                        color: '#181D2D',
                        fontSize: 22,
                        fontFamily: 'Poppins500',
                    }}
                >
                    Your cart is empty
                </Text>
                <Link href={{ pathname: '/menu', params: { restaurantId } }} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#0984e3',
                            padding: 15,
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{ color: 'white', fontFamily: 'Poppins400' }}>
                            Go Shopping
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                height: '100%',
                backgroundColor: 'white',
                paddingHorizontal: 26,
                paddingBottom: 33,
                paddingTop: 10,
            }}
        >
            <ScrollView
                style={{
                    rowGap: 21,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {cart.map((item) => (
                    <SwipeableRow key={item.id} onDelete={() => removeFromCart(item)}>
                        <CartItem data={item} />
                    </SwipeableRow>
                ))}
            </ScrollView>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: 'auto',
                }}
            >
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        rowGap: 3,
                    }}
                >
                    <Text style={[globalStyles.subtitle, { fontSize: 12 }]}>Total Price</Text>
                    <Text style={globalStyles.heading}>{totalPrice}$</Text>
                </View>
                <TouchableOpacity
                    style={{
                        paddingVertical: 14,
                        paddingHorizontal: 29,
                        backgroundColor: '#324A59',
                        borderRadius: 30,
                    }}
                    onPress={handleRouter}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 18,
                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 14,
                            }}
                        >
                            Next
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
