import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

// Async thunk to fetch SQL section data
export const fetchSqlSection = createAsyncThunk(
    'sqlSection/fetchSqlSection',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/landing-page/sql_section');
            if (response.data && response.data.content) {
                return response.data.content;
            }
            return rejectWithValue('Invalid data structure from API');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch SQL section content');
        }
    }
);

const sqlSectionSlice = createSlice({
    name: 'sqlSection',
    initialState,
    reducers: {
        setSqlSectionData: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSqlSection.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSqlSection.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSqlSection.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setSqlSectionData } = sqlSectionSlice.actions;
export default sqlSectionSlice.reducer;
