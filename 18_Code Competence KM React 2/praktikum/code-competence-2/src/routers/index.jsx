import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "../pages/LandingPage";
import AboutMe from "../pages/AboutMe";

export default function Routers() {
    return (
        <Routes>
            <Route path='/about-me' element={<AboutMe/>}/>
            <Route path='/' element={<LandingPage/>}/>
        </Routes>
    )
}