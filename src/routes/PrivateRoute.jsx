import Lottie from "lottie-react";
import { Navigate, useLocation } from "react-router-dom";
import loaderAnimation from "../assets/loader.json";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation(); 

    if(loading){
        return <div className="flex justify-center items-center ">
             <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
           </div>
     }
 
     if(user){
         return children;
     }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;