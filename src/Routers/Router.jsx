import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menus from "../Pages/Menus/Menus/Menus";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import Login from "../Pages/Login/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menus',
            element:<Menus></Menus>
        },
        {
          path:'/shop',
          element:<OurShop></OurShop>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
      ]
    },
  ]);