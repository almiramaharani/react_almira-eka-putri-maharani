import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import ListProduct from '../pages/ListProduct';
import ProductDetailPage from '../pages/DetailProduct';
import PrivateRoute from './private-route';
import Login from '../pages/Login';

export default function Routers() {
    return(
        <Routes>
            <Route path='/' exact element={<LandingPage/>}/>
            <Route path='/login' exact element={<Login/>}/>
            <Route element={<PrivateRoute/>}>
                <Route path='/create-product' element={<ListProduct/>}/>
                <Route path='/product/:id' element={<ProductDetailPage/>}/>
            </Route>
        </Routes>
    )
}