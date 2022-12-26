// import { signInWithEmailAndPassword } from 'firebase/auth';
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

// import persistReducer from 'redux-persist/lib/persistReducer';
//curryfunction is just like that allows reusable function
// const curryfuc = (A) => (b, c) => {
//     A+b-c
// }
// const with3 = curryfuc(3);
// const with10 = currfuc(!0);
// with10(2,3); 10+2-3
// with3(2,4)   3+2-4

// const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//         return next(action);
//     }
//     console.log('type: ', action.type);
//     console.log('payload: ', action.payload);
//     console.log('currentState: ', store.getState());

//     next(action);
//     console.log('next state: ', store.getState());
// }/const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

//middleware are kind of library helpers that run before an action hits the reducer whenever we dispatch an action before that action hits the reducer it hits the middleware firsy 
const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    // thunk,
    sagaMiddleware
].filter(Boolean);
//process . env tells we r in development or production based process only development when logger should be render
// const middleWares = [loggerMiddleware];

// const thunkMiddleware = (store) => (next) => (action) => {
//     if(typeof(action) === 'function') {
//         action(dispatch);
//     }
// }

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

//root-reducer
// three arguments frst rootReducr is necessary to generate the srtore are reducers are pure functions second is if we want to add any additional default states here (optional 2nd parameter)

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store); 
