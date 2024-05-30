
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = () => {
    
    return (

        <div>
            <Elements stripe={stripePromise}>
             <CheckoutForm />
           </Elements>
        </div>
    
    );
};

export default Payment;