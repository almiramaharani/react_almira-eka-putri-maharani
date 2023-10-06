import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const fetchGetProducts = createAsyncThunk(
    'fetch/getProducts',
    APIProducts.getProducts
);

const initialStateProduct = {
	message: "",
	status: "idle",
	data: null,
    detailData: null,
};

const productsSlice = createSlice({
	name: "products",
	initialState: initialStateProduct,
    
    extraReducers: (builder) => {
		builder.addCase(fetchGetProducts.pending, (state) => {
			state.status = "loading";
			state.message = "";
		});

		builder.addCase(fetchGetProducts.fulfilled, (state, { payload }) => {
			state.status = "success";
			state.data = payload;
		});

		builder.addCase(fetchGetProducts.rejected, (state, { error }) => {
            state.status = "failed";
			state.message = error.stack;
		});       
	},
});

export const selectProduct = (state) => state.products;
export default productsSlice.reducer;
