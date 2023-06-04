import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    status: 'idle',
    error: null,
    totalCount: 0
};

export const fetchProducts = createAsyncThunk('products/fetch', async (searchTerm) => {
    try {
        const response = await fetch('http://localhost:3000/data', {
            method: 'POST',
            body: JSON.stringify({ searchTerm }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        const filteredProducts = data.products.filter(product =>
            product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const totalCount = filteredProducts.length;
        const slicedProducts = filteredProducts.slice(0, 4);
        return { products: slicedProducts, totalCount };
    } catch (error) {
        throw Error('Failed to fetch products');
    }
});

// Create the slice
const productSlice = createSlice({
        name: 'product',
        initialState,
    reducers: {
        fetchProducts: {
            reducer(state, action) {
                state.loading = true;
                state.error = null;
            },
            prepare(searchTerm) {
                return { payload: { searchTerm } };
            },
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;
