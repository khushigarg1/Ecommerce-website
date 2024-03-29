import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { render } from 'react-dom';

import { Elements } from '@stripe/react-stripe-js';

import './index.scss';
import App from './App';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';

import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { stripePromise } from './utils/firebase/stripe/stripe.utils';

const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(document.getElementById('root'));

render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    {/* <UserProvider> */}
                    {/* <CategoriesProvider> */}
                    {/* <CartProvider> */}
                    <Elements stripe={stripePromise}>
                        <App />
                    </Elements>
                    {/* </CartProvider> */}
                    {/* </CategoriesProvider> */}
                    {/* </UserProvider> */}
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
    ,
    rootElement
);

{/* we can remove categories provider from it if we add that into shop component js */ }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();