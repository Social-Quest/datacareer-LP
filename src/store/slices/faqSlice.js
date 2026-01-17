import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    header: null,
    loading: false,
    error: null,
};

// Async thunk to fetch FAQ header data
export const fetchFaqHeader = createAsyncThunk(
    'faq/fetchFaqHeader',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/landing-page/faq_header');
            if (response.data && response.data.content) {
                return response.data.content;
            }
            return rejectWithValue('Invalid data structure from API');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch FAQ header content');
        }
    }
);

const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFaqHeader.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFaqHeader.fulfilled, (state, action) => {
                state.loading = false;
                state.header = action.payload;
            })
            .addCase(fetchFaqHeader.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default faqSlice.reducer;
