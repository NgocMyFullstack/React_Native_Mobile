import { View, Text } from 'react-native';
import { globalStyles } from '../../assets/global-styles';
import { ProductCard } from '../../components/product-card';
import { useFetch } from '../../hook/use-fetch';
import { ButtonSpinner } from '@gluestack-ui/themed';
import { CoffeeWithRestaurant } from '../../types';
import { useProductData } from '../../hook/use-product-data';

const MenuPage = () => {
    const { restaurantId } = useProductData();
    const { data, isLoading } = useFetch<CoffeeWithRestaurant>({ endpoint: 'coffees' });

    const coffees = data.filter((item) => item.restaurant.id == restaurantId);

    return (
        <View
            style={{
                flex: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <View
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    rowGap: 16,
                    alignItems: 'center',
                    backgroundColor: '#324A59',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    paddingVertical: 20,
                    paddingHorizontal: 25,
                }}
            >
                <Text style={[globalStyles.subtitle, { fontSize: 16, fontFamily: 'Poppins500' }]}>
                    Select your coffee
                </Text>
                <View
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        rowGap: 100,
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                    }}
                >
                    {isLoading && (
                        <ButtonSpinner
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                            }}
                            size='large'
                            color='white'
                        />
                    )}

                    {!isLoading && (
                        <>
                            {coffees.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                />
                            ))}
                        </>
                    )}
                </View>
            </View>
        </View>
    );
};

export default MenuPage;
