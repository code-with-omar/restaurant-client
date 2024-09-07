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
import Payment from "../Pages/Dashborad/Payment/Payment";
import AddReservation from "../Pages/Dashborad/AddReservation/AddReservation";

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
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path:'addReservation',
        element:<AddReservation></AddReservation>
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
        path: 'updateItem/:id',
        element: <AdminRoute> <UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`https://bistro-boss-server-code-with-omars-projects.vercel.app/menu/${params.id}`)
      },

    ]
  },

]);