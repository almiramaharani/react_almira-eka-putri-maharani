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
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                ...action.payload,
            }
            state.data.push(newProduct);
        },
        // handleDelete: (state, action) => {
        //     const filteredProduct = state.data.filter((product) => product.id !== action.payload);
        //     return filteredProduct;
        // },
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

export const selectProduct = (state) => state.product;
export const { addProduct, handleEdit } = productsSlice.actions; 
export default productsSlice.reducer;
