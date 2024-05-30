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
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Payment from "../pages/Payment/Payment";
import PaymentHistory from "../pages/Payment/PaymentHistory";


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
            loader: ()=> fetch("https://react-heaven-hearth-server.vercel.app/reviews")

        },
        {
            path: '/my-review/:id',
            element: <PrivateRoute>
                <MyReview></MyReview>
            </PrivateRoute>,
            loader: ({params})=> fetch(`https://react-heaven-hearth-server.vercel.app/booking-review/${params.id}`)
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        }
        ,
        {
            path: '/about',
            element: <About></About>
        }
        ,
        {
            path: '/gallery',
            element: <Gallery></Gallery>
        }
        ,
        {
            path: '/payment',
            element: <PrivateRoute>
                <Payment></Payment>
            </PrivateRoute>
        }
        ,
        {
            path: '/payment-history',
            element: <PrivateRoute>
                <PaymentHistory></PaymentHistory>
            </PrivateRoute>
        }
      ]
    },
  ]);

  export default router;