import {createBrowserRouter} from "react-router-dom"
import Main from "../layouts/Main"
import Home from "../pages/Home"
import About from "../pages/About"
import Cart from "../pages/Cart"
import NotFound from "../pages/NotFound"
import MessageAdmin from "../pages/MessageAdmin"
import Register from "../components/Register"
import Products from "../components/products/Products"
import OneProduct from "../components/OneProduct/oneProduct"
import Login from "../components/Login"
import AdminHome from "../pages/AdminHome"
import { ContactUs } from "../pages/Contact Us"

export const router = createBrowserRouter([
{
    path:"/" ,
    element:<Main/>,
    children:[
        {
            path:"",
            element:<Home/>,
            children:[
                
                
            ]
           
        },
        {
            path:"cart",
            element: <Cart/>
        },
        {
            path:"contactUs",
            element: <ContactUs/>
        },
        {
            path:"about",
            element:<About/>
        },
        {

            path:"login",
            element:<Login/>

        },
        {
            path:"register",
            element:<Register/>
        },
        {
            path:"/:id",
            element:<Products/>
        },
        {
            path:"/product/:id",
            element:<OneProduct/>
        },
        
    ]

},
{
    path:"/adminPage",
    element:<AdminHome/>,

},
{
    path:"/message",
    element:<MessageAdmin/>
},
{
    path:"*",
    element:<NotFound/>
}

])





