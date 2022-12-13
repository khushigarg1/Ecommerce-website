import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

// import {
//     CartDropdownContainer,
//     EmptyMessage,
//     CartItems,
// } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    // const navigate = useNavigate();

    // const goToCheckoutHandler = () => {
    //     navigate('/checkout');
    // };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
        </div>
    );
};

export default CartDropdown;

