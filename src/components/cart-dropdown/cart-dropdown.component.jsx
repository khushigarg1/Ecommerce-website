import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
// import {
//     CartDropdownContainer,
//     EmptyMessage,
//     CartItems,
// } from './cart-dropdown.styles';

const CartDropdown = () => {
    // const { cartItems } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {/* {[].map((item) => ( */}
                {cartItems?.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={goToCheckoutHandler} buttontype='inverted'>Go To checkout</Button>
        </div>
    );
};

export default CartDropdown;