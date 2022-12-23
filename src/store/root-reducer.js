import {combineReducers} from 'redux';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
// objects with the keys adn values are going to be name of the reducer sline adn then actual reducer function itself
    user: userReducer,
});