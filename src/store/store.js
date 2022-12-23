import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
 
import { rootReducer } from './root-reducer';

//middleware are kind of library helpers that run before an action hits the reducer whenever we dispatch an action before that action hits the reducer it hits the middleware firsy 
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

//root-reducer
// three arguments frst rootReducr is necessary to generate the srtore are reducers are pure functions second is if we want to add any additional default states here (optional 2nd parameter)

export const store = createStore(rootReducer,undefined,  composedEnhancers);
