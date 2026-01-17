import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

// Async thunk to fetch Map section data
export const fetchMapSection = createAsyncThunk(
    'mapSection/fetchMapSection',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/landing-page/map_section');
            if (response.data && response.data.content) {
                return response.data.content;
            }
            return rejectWithValue('Invalid data structure from API');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch Map section content');
        }
    }
);

const mapSectionSlice = createSlice({
    name: 'mapSection',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMapSection.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMapSection.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMapSection.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default mapSectionSlice.reducer;
