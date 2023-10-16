import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const detailProduct = createAsyncThunk(
    'products/detailProduct',
    APIProducts.detailProduct
)

const initialStateProduct = {
	message: "",
	status: "idle",
    detailData: null,
};

const productsSlice = createSlice({
	name: "detail",
	initialState: initialStateProduct,
    
    extraReducers: (builder) => {
		builder.addCase(detailProduct.pending, (state) => {
			state.status = "loading";
			state.message = "";
		});

		builder.addCase(detailProduct.fulfilled, (state, action) => {
			state.status = "success";
			state.detailData = action.payload;
		});

		builder.addCase(detailProduct.rejected, (state, { error }) => {
            state.status = "failed";
			state.message = error.stack;
		});       
	},
});

export default productsSlice.reducer;