import { create } from 'zustand';
import { ProductItemType } from '../types';

interface CartState {
    cart: ProductItemType[];
    totalPrice: number;
    addCartItem: (product: ProductItemType) => void;
    removeFromCart: (product: ProductItemType) => void;
    removeAll: () => void;
}

export const useCartStore = create<CartState>()((set) => ({
    cart: [],
    totalPrice: 0,

    addCartItem: (product: ProductItemType) => {
        set((state) => {
            const updatedCart = [...state.cart];
            const existingProduct = updatedCart.find((p) => p.id === product.id);

            if (existingProduct) {
                existingProduct.amount += product.amount;
            } else {
                updatedCart.push({ ...product, amount: product.amount });
            }

            const totalPrice = updatedCart.reduce(
                (total, item) => total + item.price * item.amount,
                0,
            );

            return { cart: updatedCart, totalPrice };
        });
    },

    removeFromCart: (product: ProductItemType) => {
        set((state) => {
            const itemToRemove = state.cart.find((item) => item.id === product.id);

            if (!itemToRemove) {
                return state;
            }

            const newTotalPrice = state.totalPrice - itemToRemove.price * itemToRemove.amount;

            const updatedCart = state.cart.filter((item) => item.id !== product.id);

            return { cart: updatedCart, totalPrice: newTotalPrice };
        });
    },

    removeAll: () => set({ cart: [], totalPrice: 0 }),
}));

export default useCartStore;
