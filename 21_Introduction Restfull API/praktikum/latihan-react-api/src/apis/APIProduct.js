import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance"

export const APIProducts = {
    getProducts: async () => {
        try {
            const result = await axiosInstance.get("/products");
            console.log(result.data);
            return result.data;
        } catch (err) {
            if (err instanceof AxiosError) throw new AxiosError(err);
            throw new Error(err);
        }
    }
}