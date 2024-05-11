import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBooking from "../pages/MyBooking/MyBooking";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import MyReview from "../pages/MyBooking/MyReview";


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
            element: <PrivateRoute>
                <MyBooking></MyBooking>
            </PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/room-details/:id',
            element: <RoomDetails></RoomDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`)

        },
        {
            path: '/my-review/:id',
            element: <MyReview></MyReview>,
            loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`)
        }
      ]
    },
  ]);

  export default router;