// import { StripeCardElement } from "@stripe/stripe-js";
import { CardElement } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {

    return (
        <PaymentFormContainer >
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} >Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

// now we will import it in checkout component
export default PaymentForm;