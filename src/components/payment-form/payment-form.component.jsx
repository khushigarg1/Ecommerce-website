// import { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useSelector } from "react-redux";
// import { selectCartTotal } from "../../store/cart/cart.selector";
// import { selectCurrentUser } from "../../store/user/user.selector";


// import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

// const PaymentForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const amount = useSelector(selectCartTotal);
//     const currentUser = useSelector(selectCurrentUser);

//     const [isProcessingPayment, setIsProcessingPayment] = useState(false);

//     const paymentHandler = async (e) => {
//         e.preventDefault();

//         // if tehre is no stripe or no elemens hooks thenr eturn nothing to do 
//         if (!stripe || !elements) {
//             return;
//         }

//         setIsProcessingPayment(true);
//         //now Final payment function and  we have to request to the backend and will need netlify function(serveless functions)
//         const response = await fetch('/.netlify/functions/create-payment-intent', {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ amount: amount * 100 }),
//         }).then((res) => {
//             return res.json();
//         }
//         );

//         // console.log(response);
//         // const {
//         //     paymentIntent: { client_secret }
//         // } = response;
//         // console.log(client_secret);

//         const clientSecret = response.paymentIntent.client_secret;

//         const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement),
//                 billing_details: {
//                     name: currentUser ? currentUser.displayName : 'Guest',
//                 },
//             },
//         });

//         setIsProcessingPayment(false);
//         if (paymentResult.error) {
//             alert(paymentResult.error);
//         }
//         else {
//             if (paymentResult.paymentIntent.status === 'succeeded') {
//                 alert('payment Successful');
//             }
//         }
//     };

//     return (
//         <PaymentFormContainer>
//             <FormContainer onSubmit={paymentHandler}>
//                 <h2>Credit Card Payment: </h2>
//                 <CardElement />
//                 <Button
//                     disabled={isProcessingPayment}
//                     buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
//             </FormContainer>
//         </PaymentFormContainer>
//     );
// };

// export default PaymentForm;


import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { FormContainer } from './payment-form.styles';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentButton, PaymentFormContainer } from './payment-form.styles';



const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
        console.log(process.env.STRIPE_SECRET_KEY);
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount * 100
                // description: 'test description',
            }),
        }).then((res) => {
            return res.json();
        });

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Khushi Garg',
                },
            }
            // description: 'Description of the export transaction',
        });

        console.log(paymentResult);

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!');
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                    isLoading={isProcessingPayment}
                >
                    Pay Now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
};
export default PaymentForm;




/*
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log("Data", data);
        });
*/