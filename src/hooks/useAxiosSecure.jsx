import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
});

const useAxiosSecure = () => {

    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.response.use(res =>{
            return res;
        },async error =>{
    //    console.log( "error tracked in the interceptor",error.response);
       if(error.response.status === 401 || error.response.status === 403){
        //    console.log('logout the user');
           await logOut()
           .then(() =>{
             navigate('/login')
            })
    
       }
       return Promise.reject(error)
        })
    },[logOut, navigate])
    return axiosSecure;
};

export default useAxiosSecure;