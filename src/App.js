import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Payment from './Payment';
import Orders from './Orders';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function App (){
    const stripePromise = loadStripe('STRIPE_PUBLISHABLE_API_KEY');

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<><Header /><Home /></>}>
                    </Route>
                    <Route path="/login" element={<Login />}>
                    </Route>
                    <Route path="/checkout" element={<><Header /><Checkout /></>}>
                    </Route>
                    <Route path="/payment" element={<><Header /><Elements stripe={stripePromise}><Payment /></Elements></>}>
                    </Route>
                    <Route path="/orders" element={<><Header /><Orders /></>}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;