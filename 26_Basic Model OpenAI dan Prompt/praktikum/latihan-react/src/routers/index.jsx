import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from '../pages/landing-page/LandingPage';
import ListProduct from '../pages/list-product/ListProduct';
import PrivateRoute from './private-route';
import Login from '../pages/login/Login';
import Registrasi from '../pages/register/Registrasi';
import ProductDetailPage from '../pages/detail-product/DetailProduct';
import EditProduct from '../pages/EditProduct';
import ContentGenerate from '../pages/content-generation/ContentGenerate';

export default function Routers() {
    return(
        <Routes>
            <Route path='/' exact element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Registrasi/>}/>

            <Route element={<PrivateRoute/>}>
                <Route path='/create-product' element={<ListProduct/>}/>
                <Route path='/product/:id' element={<ProductDetailPage/>}/>
                <Route path='/edit-product/:id' element={<EditProduct/>}/>
                <Route path='/content-generate' element={<ContentGenerate/>}/>
            </Route>
        </Routes>
    )
}