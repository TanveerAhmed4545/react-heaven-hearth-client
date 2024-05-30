import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useBooking = () => {
    const {user} = useContext(AuthContext);
    
    const axiosSecure = useAxiosSecure();
    // tan stack query 
    const { refetch,data: booking=[]} = useQuery({
        queryKey: ['booking',user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/my-booking/${user.email}`)
            return res.data
        }
    })
    return [booking,refetch];
};

export default useBooking;