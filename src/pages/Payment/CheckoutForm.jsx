import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useBooking from "../../hooks/useBooking";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
  const {user} = useContext(AuthContext);
    const [error,setError] = useState('');
     const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId,setTransactionId] = useState('');

    const navigate = useNavigate();

    const [booking,refetch] = useBooking();
  const price = booking.reduce((total,item) => total + item.price, 0)
  console.log(price);

  useEffect(()=>{
     
    if(price > 0){
        axiosSecure.post('/create-payment-intent',{price})
    .then(res=> {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
    }


  },[axiosSecure, price])

// const fetchPaymentIntent = async (price) => {
//     try {
//       const response = await axios.post(`https://react-heaven-hearth-server.vercel.app/create-payment-intent`, { price });
//       const clientSecret = response.data.clientSecret;
//       setClientSecret(clientSecret);
//     } catch (error) {
//       // Handle errors here
//       console.error("Error fetching payment intent:", error);
//     }
//   };
  
//   useEffect(() => {
//     if (price > 0) {
//       fetchPaymentIntent(price);
//     }
//   }, [price]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
    
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
          setError(error.message);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          setError('');
        }






         // confirm payment 

      const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
          card: card,
          billing_details: {
             email: user?.email || 'anonymous',
             name: user?.displayName || 'anonymous'
          } 
        }
      })

      if(confirmError){
        console.log('confirm error');
      }else{
        console.log('payment intent',paymentIntent);
        if(paymentIntent.status=== 'succeeded'){
          // console.log('transaction id', paymentIntent.id);
          setTransactionId(paymentIntent.id)

          // now save the payment save in the database
          const payment = {
            email: user.email,
            price: price,
            transactionId: paymentIntent.id,
            date: new Date(), // use moment js
            bookIds: booking.map(item => item._id),
            
          }
          const res =  await axiosSecure.post('/payments',payment)
          console.log('payment saved',res)
        refetch();
        if(res.data?.paymentResult?.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for payment",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/payment-history');
        }
         
        }
      }





      };
    return (
        <div className="px-5">
             <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Payments </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">
            Card Number
          </label>
          <CardElement
            id="cardNumber"
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Pay
        </button>
        <p className="text-red-600 py-3">{error}</p>
        {transactionId && <p className="text-green-500">Your transaction id : {transactionId}</p>}
      </form>
    </div>
        </div>
    );
};

export default CheckoutForm;