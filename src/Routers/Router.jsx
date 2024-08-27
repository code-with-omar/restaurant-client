import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menus from "../Pages/Menus/Menus/Menus";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import Secret from "../Pages/Shared/Secret/Secret";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashborad/Cart/Cart";
import AllUsers from "../Pages/Dashborad/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menus',
        element: <Menus></Menus>
      },
      {
        path: '/shop',
        element:<PrivateRouter><OurShop></OurShop></PrivateRouter> 
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRouter><Secret></Secret></PrivateRouter>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      }
    ]
  },

]);