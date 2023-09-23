import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        numberProduct: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        category: "Doe",
        productFreshnessRadio: "Doe",
        price: "Doe",
        image: "Doe",
        addDesc: "Doe",
    },
]


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: initialState
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                ...action.payload,
            }
            state.products = [...state.products, newProduct];
            alert("Successfully add a new product");
        },
        handleDelete: (state, action) => {
            state.products = state.products.filter((product) => {
                return product.numberProduct !== action.payload
            });
            console.log(state.products)
            alert("Successfully delete a product");
        },
        handleEdit: (state, action) => {
            const productIndex = state.products.findIndex(
                (product) => product.numberProduct === action.payload.numberProduct
            );

            if (productIndex !== -1) {
                const editedProduct = { ...state.products[productIndex] };

                if (action.payload.productName) {
                    editedProduct.productName = action.payload.productName;
                }
                if (action.payload.price) {
                    editedProduct.price = action.payload.price;
                }
                if (action.payload.image) {
                    editedProduct.image = action.payload.image;
                }

                state.products[productIndex] = editedProduct;
                alert("Successfully edited the product");
            }
        }
    }
})

export const { addProduct, handleDelete, handleEdit } = productSlice.actions;
export default productSlice.reducer;