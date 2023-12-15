import { createHashRouter, Navigate} from "react-router-dom";
import React from "react";
import {MainPage} from "./pages";
import {MainLayout} from "./layouts";

// const router= createBrowserRouter([
const router= createHashRouter([
    {
        path:"",element:<MainLayout/>, children:[
            {index:true,element:<Navigate to={"main"}/>},
            {path:"main",element:<MainPage/>}
        ]
    }
])

export {
    router
}