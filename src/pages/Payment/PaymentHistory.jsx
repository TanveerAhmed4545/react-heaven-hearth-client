import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";


const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data: payments=[]} = useQuery({
        queryKey: ['payments',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center my-6">Total Payments : {payments.length}</h2>

            <div className="overflow-x-auto min-h-[60vh]">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Price</th>
        <th>Transaction Id</th>
        
      </tr>
    </thead>
    <tbody>
      {payments.map((payment,idx)=> <tr key={payment._id} className="bg-base-200">
        <th>{idx+1}</th>
        <td>{moment(payment.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
        <td>$ {payment.price}</td>
        <td>{payment.transactionId}</td>
        
      </tr>)}
      
   
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default PaymentHistory;