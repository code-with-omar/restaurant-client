import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

// TODO : add publicable key
const stripePromise = loadStripe(import.meta.env.VITE_Strip_Payment_PK);
const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
        </Elements>
    );
};

export default Payment;