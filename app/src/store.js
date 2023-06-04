import { configureStore } from '@reduxjs/toolkit';
import productReducer from './createSlice';

const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export default store;
