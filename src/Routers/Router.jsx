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
import AddItem from "../Pages/Dashborad/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import MangeItem from "../Pages/Dashborad/MangeItem/MangeItem";
import Allmenu from "../Pages/Dashborad/AllMenu/Allmenu";
import UpdateItem from "../Pages/Dashborad/UpdateItem/UpdateItem";

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
        element: <OurShop></OurShop>
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
      //normal user route
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin use route
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
      ,
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manageItem',
        element: <AdminRoute><MangeItem></MangeItem></AdminRoute>
      },
      {
        path: 'allmenus',
        element: <AdminRoute> <Allmenu></Allmenu></AdminRoute>
      },
      {
        path:'updateItem',
        element:<UpdateItem></UpdateItem>,
        loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute> <UpdateItem></UpdateItem></AdminRoute>
      }
    ]
  },

]);