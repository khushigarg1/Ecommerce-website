import { signInWithEmailAndPassword } from 'firebase/auth';
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//curryfunction is just like that allows reusable function
// const curryfuc = (A) => (b, c) => {
//     A+b-c
// }
// const with3 = curryfuc(3);
// const with10 = currfuc(!0);
// with10(2,3); 10+2-3
// with3(2,4)   3+2-4

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);
    console.log('next state: ', store.getState());
}

//middleware are kind of library helpers that run before an action hits the reducer whenever we dispatch an action before that action hits the reducer it hits the middleware firsy 
const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

//root-reducer
// three arguments frst rootReducr is necessary to generate the srtore are reducers are pure functions second is if we want to add any additional default states here (optional 2nd parameter)

export const store = createStore(rootReducer, undefined, composedEnhancers);
