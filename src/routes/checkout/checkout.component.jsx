import './checkout.styles.scss';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
    // const { cartItems, addItemToCart, removeItemToCart, cartTotal } = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    // const { id, name, quantity } = cartItem;
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        // <div key={id}>
                        //     <h2>{name}</h2>
                        //     <span>{quantity}</span>
                        //     <br />
                        //     {/* funnction to remove items fromc art or to decrement the quanity and same with increment */}
                        //     <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
                        //     <br />
                        //     <span onClick={() => addItemToCart(cartItem)}>increment</span>
                        // </div>
                    );
                })
            }
            <span className='total'>Total: ${cartTotal}</span>
            <PaymentForm />
        </div>
    )
};

export default Checkout;