import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

// Async thunk to fetch HowItWorks data
export const fetchHowItWorks = createAsyncThunk(
    'howItWorks/fetchHowItWorks',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/landing-page/how_it_works');
            if (response.data && response.data.content) {
                return response.data.content;
            }
            return rejectWithValue('Invalid data structure from API');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch How It Works content');
        }
    }
);

const howItWorksSlice = createSlice({
    name: 'howItWorks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHowItWorks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHowItWorks.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchHowItWorks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default howItWorksSlice.reducer;
