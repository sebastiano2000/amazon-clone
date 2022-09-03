import React, { useEffect, useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
    const [{basket}, dispatch] = useStateValue();
    
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const getClientSecret = async () => {
            const res = await axios({
                method: 'post',
                url: '/payments/create?total=' + getBasketTotal(basket) * 100
            });
            setClientSecret(res.data.getClientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault();

        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentsIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({type: 'EMPTY_BASKET'});

            navigate('/orders', { replace: true });
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>Checkout ({
                <Link to='/checkout'>{basket?.length} items</Link>
                })
            </h1>


            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment_address'>
                    <p>sebastianosaad@gmail.com</p>
                    <p>Louran</p>
                    <p>Alexandria, EG</p>
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map((item) => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={handleSubmit}>
                        
                        <CardElement onChange={handleChange}/>

                        <div className='payment_priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3 className='order_total'>
                                        Order Total: {value}
                                    </h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {error && (<div>Error</div>)}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment