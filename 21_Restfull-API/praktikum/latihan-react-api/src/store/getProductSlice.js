import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProducts } from "../apis/APIProduct";

export const fetchGetProducts = createAsyncThunk(
    'fetch/getProducts',
    APIProducts.getProducts
);

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

        builder.addCase(editProduct.fulfilled, (state, { payload }) => {
            const productIndex = state.data.findIndex((product) => product.id === payload.id);
            if (productIndex !== -1) {
                state.data[productIndex] = payload;
                state.status = 'success';
                state.message = 'Product edited successfully';
            }
        });
	},
    reducers: {
        handleEdit: (state, action) => {
            const productIndex = state.data.findIndex(
                (product) => product.id === action.payload.id
            );

            if (productIndex !== -1) {
                const editedProduct = { ...state.data[productIndex] };
                console.log(action.payload);
                if (action.payload.productName) {
                    editedProduct.productName = action.payload.id;
                }
                if (action.payload.price) {
                    editedProduct.price = action.payload.price;
                }
                if (action.payload.image) {
                    editedProduct.image = action.payload.image;
                }

                state.data[productIndex] = editedProduct;
                alert("Successfully edited the product");
            }
        }
    }
});

export const selectProduct = (state) => state.products;
export const { handleEdit } = productsSlice.actions; 
export default productsSlice.reducer;
