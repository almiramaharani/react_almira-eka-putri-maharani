import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import products from './features/product/getProductSlice';
import detail from './features/product/detailProductSlice';
import response from './features/openai/responseAISlice';
const rootReducers = combineReducers({
    products,
    detail,
    response,
});

const persistConfig = {
    key: 'root',
    storage,
    backlist: ['products', 'detail', 'response'],
};

const pReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: pReducer,
    middleware: [thunkMiddleware],
});

const persistor = persistStore(store);

export { persistor };
export default store;