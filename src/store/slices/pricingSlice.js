import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    header: null,
    card: null,
    loading: false,
    error: null,
};

// Async thunk to fetch pricing data (header and card)
export const fetchPricing = createAsyncThunk(
    'pricing/fetchPricing',
    async (_, { rejectWithValue }) => {
        try {
            const [headerRes, cardRes] = await Promise.all([
                api.get('/api/landing-page/pricing_header'),
                api.get('/api/landing-page/pricing_card'),
            ]);

            return {
                header: headerRes.data.content,
                card: cardRes.data.content
            };
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch pricing content');
        }
    }
);

const pricingSlice = createSlice({
    name: 'pricing',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPricing.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPricing.fulfilled, (state, action) => {
                state.loading = false;
                state.header = action.payload.header;
                state.card = action.payload.card;
            })
            .addCase(fetchPricing.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default pricingSlice.reducer;
