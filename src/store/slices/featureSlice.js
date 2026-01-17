import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    header: null,
    list: [],
    loading: false,
    error: null,
};

export const fetchFeatures = createAsyncThunk(
    'feature/fetchFeatures',
    async (_, { rejectWithValue }) => {
        try {
            // Step 1: Fetch Main Section Title
            const headerPromise = api.get('/api/landing-page/features_header');

            // Step 2: Fetch all 3 features in one go
            const keys = ['feature_1', 'feature_2', 'feature_3'];
            const featurePromises = keys.map(key => api.get(`/api/landing-page/${key}`));

            const [headerRes, ...featureResponses] = await Promise.all([headerPromise, ...featurePromises]);

            return {
                header: headerRes.data.content.title,
                list: featureResponses.map(res => res.data.content)
            };
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch features data');
        }
    }
);

const featureSlice = createSlice({
    name: 'feature',
    initialState,
    reducers: {
        setFeatureData: (state, action) => {
            state.header = action.payload.header;
            state.list = action.payload.list;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeatures.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeatures.fulfilled, (state, action) => {
                state.loading = false;
                state.header = action.payload.header;
                state.list = action.payload.list;
            })
            .addCase(fetchFeatures.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setFeatureData } = featureSlice.actions;
export default featureSlice.reducer;
