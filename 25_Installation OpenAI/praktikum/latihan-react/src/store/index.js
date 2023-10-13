import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import products from './getProductSlice';
import detail from './detailProductSlice';
import response from './responseAISlice';
const rootReducers = combineReducers({
    products,
    detail,
    response,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products', 'detail', 'response'],
};

const pReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: pReducer,
    middleware: [thunkMiddleware],
});

const persistor = persistStore(store);

export { persistor };
export default store;