import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
// import { createAction } from '../utils/firebase/reducer/reducer.component';
// import {
//     onAuthStateChangedListener,
//     createUserDocumentFromAuth
// } from '../utils/firebase/firebase/firebase.utils';


import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
// import './categories.styles.scss';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />
            </Route>
        </Routes>
    )
};

export default App;