import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance"

export const APIProducts = {
    getProducts: async () => {
        try {
            const result = await axiosInstance.get("/products");
            return result.data;
        } catch (err) {
            if (err instanceof AxiosError) throw new AxiosError(err);
            throw new Error(err);
        }
    },
    
    addProduct: async (newProduct) => {
        try {
            console.log(`new prod: ${JSON.stringify(newProduct, null, 2)}`);
            const result = await axiosInstance.post('/products', newProduct);
            return result.data;
        } catch (err) {
            if (err instanceof AxiosError) throw new AxiosError(err);
            throw new Error(err);
        }
    },

    deleteProduct: async (id) => {
        try {
            const result = await axiosInstance.delete(`/products/${id}`);
            return result.data;
        } catch (err) {
            if (err instanceof AxiosError) throw new AxiosError(err);
            throw new Error(err);
        }
    },

    editProduct: async (data) => {
        try {
            const id = data.id;
            console.log(`edit prod: ${JSON.stringify(data, null, 2)}, id: ${id}`);
            const { productName, price, image } = data;
            const result = await axiosInstance.put(`/products/${id}`, {
                productName,
                price,
                image,
            });
            console.log(result)
            return result;
        } catch (err) {
            if (err instanceof AxiosError) throw new AxiosError(err);
            throw new Error(err);
        }
    }
}