import React, { useReducer, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../assets/global-styles';
import {
    Button,
    ButtonText,
    Divider,
    Toast,
    ToastDescription,
    VStack,
    useToast,
} from '@gluestack-ui/themed';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useFetch } from '../../hook/use-fetch';
import { initialState, orderOptionsReducer } from '../../hook/use-reducer-order-options';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BottomSheet from '../../components/bottom-sheet';
import { Volume } from '../../components/volume';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import TakeawayIcon from '../../components/icon/takeaway-icon';
import OnSiteIcon from '../../components/icon/onsite-icon';
import LightIceIcon from '../../components/icon/light-ice-icon';
import RegularIceIcon from '../../components/icon/regular-ice-icon';
import ExtraIceIcon from '../../components/icon/extra-ice-icon';
import useCartStore from '../../hook/use-cart';
import { CoffeeWithRestaurant, ProductItemType } from '../../types';
import CustomHeader from '../../components/custom-header';

const OrderOptionsPage = () => {
    const { data } = useFetch<CoffeeWithRestaurant>({ endpoint: 'coffees' });
    const router = useRouter();
    const toast = useToast();

    const { id } = useLocalSearchParams();
    const idAsString = id?.toString();

    const { addCartItem } = useCartStore();

    const [amount, setAmount] = useState<number>(1);
    const [coffeeItem, setCoffeeItem] = useState<ProductItemType>();

    const bottomSheetRefSyrupt = useRef<BottomSheetModal>(null);
    const bottomSheetRefMilk = useRef<BottomSheetModal>(null);

    const openModalSyrupt = () => {
        bottomSheetRefSyrupt.current?.present();
    };

    const openModalMilk = () => {
        bottomSheetRefMilk.current?.present();
    };

    const [state, dispatch] = useReducer(orderOptionsReducer, initialState);
    const { carryingOption, volumeOption, iceOption, milkOption, syruptOption } = state;

    const product = data.find((item) => item.id == id);

    if (!product) return null;

    const handleSetData = () => {
        if (!carryingOption || !volumeOption || !iceOption || !milkOption || !syruptOption) {
            toast.show({
                placement: 'top',
                render: () => {
                    return (
                        <Toast action='warning'>
                            <VStack space='xs'>
                                <ToastDescription>Please complete all the fields!</ToastDescription>
                            </VStack>
                        </Toast>
                    );
                },
            });
            return;
        } else {
            setCoffeeItem((prevCoffeeItem) => {
                return {
                    ...prevCoffeeItem,
                    id: idAsString,
                    name: product.name,
                    image: product.image,
                    carryingOption,
                    volumeOption,
                    iceOption,
                    milk: milkOption,
                    syrup: syruptOption,
                    price: product.price,
                    amount,
                };
            });
        }
        if (coffeeItem) {
            addCartItem(coffeeItem);
            router.push('/cart');
        }
    };

    const handleSetMilk = (value: string) => {
        dispatch({ type: 'SET_MILK', value: value as '' });
    };

    const handleSetSyrupt = (value: string) => {
        dispatch({ type: 'SET_SYRUPT', value: value as '' });
    };

    const handleSetActiveCarrying = (name: 'Onsite' | 'Takeaway') => {
        dispatch({ type: 'SET_ACTIVE_CARRYING', name, value: name });
    };

    const handleSetVolume = (name: 'Volume 250' | 'Volume 350' | 'Volume 450') => {
        dispatch({ type: 'SET_VOLUME', name, value: name });
    };

    const handleSetIce = (name: 'Light Ice' | 'Regular Ice' | 'Extra Ice') => {
        dispatch({ type: 'SET_ICE', name, value: name });
    };

    const handlePress = (value: 'Increase' | 'Decrease') => {
        if (value === 'Increase') {
            setAmount((current) => current + 1);
        }

        if (value === 'Decrease') {
            if (amount === 1) return;
            setAmount((current) => current - 1);
        }
    };

    return (
        <BottomSheetModalProvider>
            <CustomHeader />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['bottom']}>
                <View
                    style={{
                        paddingHorizontal: 25,
                        paddingVertical: 25,
                        flex: 1,
                        backgroundColor: 'white',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#F7F8FB',
                            borderRadius: 12,
                            paddingVertical: 12,
                            paddingHorizontal: 86,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Animated.Image
                            entering={FadeIn.duration(400).delay(200)}
                            style={{
                                width: 152,
                                height: 121,
                                objectFit: 'cover',
                                borderRadius: 12,
                            }}
                            source={{ uri: product.image }}
                        />
                    </View>

                    <View
                        style={{
                            rowGap: 21,
                            marginTop: 35,
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                        }}
                    >
                        <View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Animated.Text
                                    style={globalStyles.text}
                                    entering={FadeInLeft.duration(400).delay(200)}
                                >
                                    {product.name}
                                </Animated.Text>
                                <Animated.View
                                    entering={FadeInRight.duration(400).delay(200)}
                                    style={{
                                        width: 85,
                                        height: 40,
                                        borderColor: '#efefef',
                                        borderRadius: 50,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        borderWidth: 1,
                                        paddingHorizontal: 12,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <TouchableOpacity style={{ flex: 1 }}>
                                        <Text
                                            style={(globalStyles.text, { fontSize: 23 })}
                                            onPress={() => handlePress('Decrease')}
                                        >
                                            -
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={globalStyles.text}>{amount}</Text>
                                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <Text
                                            style={(globalStyles.text, { fontSize: 17 })}
                                            onPress={() => handlePress('Increase')}
                                        >
                                            +
                                        </Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <Divider style={{ marginTop: 21 }} />
                        </View>

                        <View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Animated.Text
                                    entering={FadeInLeft.duration(400).delay(200)}
                                    style={globalStyles.text}
                                >
                                    Onsite / Takeaway
                                </Animated.Text>
                                <Animated.View
                                    entering={FadeInRight.duration(400).delay(200)}
                                    style={{
                                        borderColor: 'red',
                                        borderRadius: 50,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        gap: 31,
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => handleSetActiveCarrying('Onsite')}
                                    >
                                        <OnSiteIcon
                                            color={
                                                carryingOption === 'Onsite' ? 'black' : '#D8D8D8'
                                            }
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => handleSetActiveCarrying('Takeaway')}
                                    >
                                        <TakeawayIcon
                                            color={
                                                carryingOption === 'Takeaway' ? 'black' : '#D8D8D8'
                                            }
                                        />
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <Divider style={{ marginTop: 21 }} />
                        </View>

                        <View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Animated.Text
                                    entering={FadeInLeft.duration(400).delay(200)}
                                    style={globalStyles.text}
                                >
                                    Volume, ml
                                </Animated.Text>
                                <Animated.View
                                    entering={FadeInRight.duration(400).delay(200)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        gap: 27,
                                    }}
                                >
                                    <Volume
                                        size='sm'
                                        onPress={() => handleSetVolume('Volume 250')}
                                        color={volumeOption === 'Volume 250' ? 'black' : '#D8D8D8'}
                                    />
                                    <Volume
                                        size='md'
                                        onPress={() => handleSetVolume('Volume 350')}
                                        color={volumeOption === 'Volume 350' ? 'black' : '#D8D8D8'}
                                    />
                                    <Volume
                                        size='lg'
                                        onPress={() => handleSetVolume('Volume 450')}
                                        color={volumeOption === 'Volume 450' ? 'black' : '#D8D8D8'}
                                    />
                                </Animated.View>
                            </View>
                            <Divider style={{ marginTop: 21 }} />
                        </View>

                        <View>
                            <View
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    gap: 27,
                                }}
                            >
                                <Animated.Text
                                    entering={FadeInLeft.duration(400).delay(200)}
                                    style={globalStyles.text}
                                >
                                    Milk
                                </Animated.Text>
                                <Animated.View entering={FadeInRight.duration(400).delay(200)}>
                                    <TouchableOpacity onPress={openModalMilk}>
                                        <Text style={globalStyles.text}>
                                            {milkOption ? milkOption : 'Select'}
                                        </Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <Divider
                                style={{
                                    marginTop: 21,
                                }}
                            />
                        </View>

                        <View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Animated.Text
                                    entering={FadeInLeft.duration(400).delay(200)}
                                    style={globalStyles.text}
                                >
                                    Syrup
                                </Animated.Text>
                                <Animated.View entering={FadeInRight.duration(400).delay(200)}>
                                    <TouchableOpacity onPress={openModalSyrupt}>
                                        <Text style={globalStyles.text}>
                                            {syruptOption ? syruptOption : 'Select'}
                                        </Text>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <Divider
                                style={{
                                    marginTop: 21,
                                }}
                            />
                        </View>

                        <View>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Animated.Text
                                    entering={FadeInLeft.duration(400).delay(200)}
                                    style={globalStyles.text}
                                >
                                    Ice
                                </Animated.Text>

                                <Animated.View
                                    entering={FadeInRight.duration(400).delay(200)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        gap: 26,
                                    }}
                                >
                                    <TouchableOpacity onPress={() => handleSetIce('Light Ice')}>
                                        <LightIceIcon
                                            color={iceOption === 'Light Ice' ? 'black' : '#D8D8D8'}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => handleSetIce('Regular Ice')}>
                                        <RegularIceIcon
                                            color={
                                                iceOption === 'Regular Ice' ? 'black' : '#D8D8D8'
                                            }
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => handleSetIce('Extra Ice')}>
                                        <ExtraIceIcon
                                            color={iceOption === 'Extra Ice' ? 'black' : '#D8D8D8'}
                                        />
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <Divider
                                style={{
                                    marginTop: 21,
                                }}
                            />
                        </View>

                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                width: '100%',
                            }}
                        >
                            <Animated.Text
                                entering={FadeInLeft.duration(400).delay(200)}
                                style={globalStyles.heading}
                            >
                                Total Amount
                            </Animated.Text>
                            <Animated.Text
                                entering={FadeInRight.duration(400).delay(200)}
                                style={globalStyles.heading}
                            >
                                {product.price * amount}$
                            </Animated.Text>
                        </View>

                        <TouchableOpacity>
                            <Button
                                size='md'
                                variant='solid'
                                action='primary'
                                isDisabled={false}
                                isFocusVisible={false}
                                borderRadius='$full'
                                paddingVertical={12}
                                backgroundColor='#324A59'
                                height={46}
                                onPress={handleSetData}
                            >
                                <ButtonText>Next</ButtonText>
                            </Button>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{
                        zIndex: 40,
                        position: 'relative',
                    }}
                >
                    <BottomSheet
                        title='What flavor of syrupt do you prefer?'
                        ref={bottomSheetRefSyrupt}
                        onPress={handleSetSyrupt}
                        data={product.syrups}
                    />
                </View>
                <View
                    style={{
                        zIndex: 40,
                        position: 'relative',
                    }}
                >
                    <BottomSheet
                        title='What flavor of milk do you prefer?'
                        ref={bottomSheetRefMilk}
                        onPress={handleSetMilk}
                        data={product.milks}
                    />
                </View>
            </SafeAreaView>
        </BottomSheetModalProvider>
    );
};

export default OrderOptionsPage;
