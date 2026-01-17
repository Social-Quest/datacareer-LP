import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

// Initial state
const initialState = {
    data: null,
    loading: false,
    error: null,
};

// Async thunk to fetch hero data
export const fetchHeroData = createAsyncThunk(
    'hero/fetchHeroData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/landing-page/hero');
            if (response.data && response.data.content) {
                return response.data.content;
            }
            return rejectWithValue('Invalid data structure from API');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch hero data');
        }
    }
);

const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers: {
        // Optionally add reducers for manual updates
        setHeroData: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHeroData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchHeroData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                // state remains with initial empty values or previous successful fetch
            });
    },
});

export const { setHeroData } = heroSlice.actions;
export default heroSlice.reducer;
