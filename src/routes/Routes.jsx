import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBooking from "../pages/MyBooking/MyBooking";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/rooms',
            element: <Rooms></Rooms>
        },
        {
            path: '/my-booking',
            element: <MyBooking></MyBooking>
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;