import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

// Async thunk to fetch data skies data
export const fetchDataSkies = createAsyncThunk(
    'dataSkies/fetchDataSkies',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/landing-page/data_skies');
            if (response.data && response.data.content) {
                return response.data.content;
            }
            return rejectWithValue('Invalid data structure from API');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch data skies content');
        }
    }
);

const dataSkiesSlice = createSlice({
    name: 'dataSkies',
    initialState,
    reducers: {
        setDataSkies: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataSkies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDataSkies.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDataSkies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setDataSkies } = dataSkiesSlice.actions;
export default dataSkiesSlice.reducer;
