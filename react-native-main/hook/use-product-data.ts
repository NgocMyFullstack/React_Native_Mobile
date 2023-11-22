import { create } from 'zustand';
import { ProductItemType } from '../types';

interface ProductDataState {
    data: ProductItemType;
    restaurantId: string;
    setRestaurantId: (state: string) => void;
    setData: (state: ProductItemType) => void;
}

const useProductData = create<ProductDataState>((set) => ({
    data: {
        id: '',
        name: '',
        image: '',
        amount: 1,
        price: 1,
        carryingOption: null,
        volumeOption: null,
        iceOption: null,
        syrup: '',
        milk: '',
    },
    restaurantId: '',
    setRestaurantId: (state) => set({ restaurantId: state }),
    setData: (state) => set({ data: state }),
}));

export { useProductData };
