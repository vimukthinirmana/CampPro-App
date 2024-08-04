import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import storeSlice from './slices/storeSlice';
 
export const shopStore = configureStore({
    reducer: {
        cart: cartSlice,
        store: storeSlice
    },
}) 