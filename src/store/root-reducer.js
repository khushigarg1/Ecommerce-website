import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
    // objects with the keys adn values are going to be name of the reducer sline adn then actual reducer function itself
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
});