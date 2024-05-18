import {createBrowserRouter} from "react-router-dom"
import Main from "../layouts/Main"
import Home from "../pages/Home"
import About from "../pages/About"
import Cart from "../pages/Cart"
import Category from "../pages/Category"
import Register from "../components/Register"
import Login from "../components/Login"
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
            path:"about",
            element:<About/>
        },
        {
            path:"cart",
            element: <Cart/>
        },
        {
            path:"category",
            element: <Category/>

        },
        {
            path:"register",
            element:<Register/>

        },
        {
            path:"login",
            element:<Login/>
        }
    ]

}

])





