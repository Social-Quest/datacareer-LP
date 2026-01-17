import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    header: null,
    loading: false,
    error: null,
};

// Async thunk to fetch Sub Hero data
export const fetchSubHero = createAsyncThunk(
    'subHero/fetchSubHero',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/landing-page/sub_hero');
            if (response.data && response.data.content) {
                return response.data.content;
            }
            return rejectWithValue('Invalid data structure from API');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch Sub Hero content');
        }
    }
);

const subHeroSlice = createSlice({
    name: 'subHero',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubHero.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSubHero.fulfilled, (state, action) => {
                state.loading = false;
                state.header = action.payload;
            })
            .addCase(fetchSubHero.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default subHeroSlice.reducer;
