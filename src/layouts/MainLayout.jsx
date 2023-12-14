import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/headerContainer";
import {Footer} from "../components";

const MainLayout = () => {


    return (
        <div className="container">
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};