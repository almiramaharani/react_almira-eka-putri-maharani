import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openAI } from "../apis/OpenAI";

export const getResponse = createAsyncThunk(
    'api/getResponse',
    openAI.getResponseAI,
);

const initialState = {
	isLoading: false,
	data: null,
};

const responseSlice = createSlice({
    name: 'response',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getResponse.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getResponse.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getResponse.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default responseSlice.reducer;