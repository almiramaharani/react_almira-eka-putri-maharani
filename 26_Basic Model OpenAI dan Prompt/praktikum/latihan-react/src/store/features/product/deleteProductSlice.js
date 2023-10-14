import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../../../apis/APIProduct";

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    APIProducts.deleteProduct
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
        builder.addCase(deleteProduct.pending, (state) => {
			state.status = "loading";
			state.message = "";
		});

        builder.addCase(deleteProduct.fulfilled, (state) => {
            state.status = 'success';
            state.message = 'Product deleted successfully';
        });

        builder.addCase(deleteProduct.rejected, (state, { error }) => {
            state.status = "failed";
			state.message = error.stack;
		});
    }
});

export const selectProduct = (state) => state.products;
export default productsSlice.reducer;