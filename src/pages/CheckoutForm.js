
import React from 'react';
import '../styles/checkout.css'
import {CardElement, CardExpiryElement, useStripe,
  useElements} from '@stripe/react-stripe-js';
  
  const CheckoutForm = (props) => {
  const {quantity, totalPrice} = props
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="checkoutBtn" style={quantity === 0 ? {display: 'none'} : {display: 'block'}}>Pay ${totalPrice}</button>
    </form>
  );
};

export default CheckoutForm