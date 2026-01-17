import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    header: null,
    loading: false,
    error: null,
};

// Async thunk to fetch Interview Questions header data
export const fetchInterviewQuestionsHeader = createAsyncThunk(
    'interviewQuestions/fetchHeader',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/api/landing-page/interview_questions_header');
            if (response.data && response.data.content) {
                return response.data.content;
            }
            return rejectWithValue('Invalid data structure from API');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch Interview Questions header content');
        }
    }
);

const interviewQuestionsSlice = createSlice({
    name: 'interviewQuestions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInterviewQuestionsHeader.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInterviewQuestionsHeader.fulfilled, (state, action) => {
                state.loading = false;
                state.header = action.payload;
            })
            .addCase(fetchInterviewQuestionsHeader.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default interviewQuestionsSlice.reducer;
