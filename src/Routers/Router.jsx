import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menus from "../Pages/Menus/Menus/Menus";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
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
        }
      ]
    },
  ]);