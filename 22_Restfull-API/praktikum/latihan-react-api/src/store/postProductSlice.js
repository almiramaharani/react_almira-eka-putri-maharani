import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const addProduct = createAsyncThunk(
    'products/addProduct',
    APIProducts.addProduct
);

const initialStateProduct = {
	message: "",
	status: "idle",
	data: null,
};

const productsSlice = createSlice({ 
	name: "products",
	initialState: initialStateProduct,

    extraReducers: (builder) => {
        builder.addCase(addProduct.pending, (state) => {
			state.status = "loading";
			state.message = "";
		});

		builder.addCase(addProduct.fulfilled, (state, { payload }) => {
			state.status = "success";
			state.data = payload;
            state.message = "Successfully added a new product";
		});

		builder.addCase(addProduct.rejected, (state, { error }) => {
            state.status = "failed";
			state.message = error.stack;
		});
    }
});

export const selectProduct = (state) => state.products;
export default productsSlice.reducer;


