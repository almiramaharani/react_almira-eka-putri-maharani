import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const editProduct = createAsyncThunk(
    'products/editProduct',
    APIProducts.editProduct
)

const initialStateProduct = {
	message: "",
	status: "idle",
	data: null,
};

const productsSlice = createSlice({
	name: "products",
	initialState: initialStateProduct,
    extraReducers: (builder) => {
        builder.addCase(editProduct.pending, (state) => {
			state.status = "loading";
			state.message = "";
		});

        builder.addCase(editProduct.fulfilled, (state, {payload}) => {
            state.status = 'success';
            state.message = 'Product edited successfully';
            console.log(payload);
            state.data = payload;
        });

        builder.addCase(editProduct.rejected, (state, { error }) => {
            state.status = "failed";
			state.message = error.stack;
		});
    }

});

export const selectProduct = (state) => state.products;
export default productsSlice.reducer;