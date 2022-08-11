import React from 'react';
import '../styles/cartItems.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_live_dWlyEc3ajrPjHUdj8JIHRlXo');


function CartItems(props) {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: 'sk_live_...8E7u',
  // };

  let totalPrice;
  const { cartItems, setCartItems, quantity, setQuantity } = props;
  console.log(props);
  const render = cartItems.map((item) => {
    const itemtotal = cartItems.map((item) => item.quantity * item.price);
    const initialValue = 0;
    totalPrice = itemtotal.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    const onAdd = () => {
      

      const exist = cartItems.find((x) => x.id === item.id);

      if (exist) {
        console.log(exist)
        exist.quantity = exist.quantity+1
        item.quantity = exist.quantity
        setCartItems([...cartItems]);
        setQuantity(quantity + 1);
      } else {
        setCartItems([...cartItems, item]);
        setQuantity(quantity + 1);
        item.quantity = item.quantity+1
      }
    };

    const onRemove = () => {
      const exist = cartItems.find((x) => x.id === item.id);

      if (item.quantity === 1 && exist) {
        const filter = cartItems.filter((x) => x.id !== item.id);
        console.log(filter);
        setCartItems(filter);
        item.quantity = item.quantity - 1;
        setQuantity(quantity - 1);
      } else if (exist) {
        console.log(exist)
        exist.quantity = exist.quantity-1
        item.quantity = exist.quantity
        setCartItems([...cartItems]);
        setQuantity(quantity - 1);
      } else {
        setCartItems([...cartItems, item]);
        setQuantity(quantity - 1);
        item.quantity = item.quantity-1
      }
    };


    return (
      <div key={item.id} className='wrapper'>
        <p className='cartItemName'>
        <img alt='' src={item.imgUrl} />
          
          {item.name}</p>
        <div className="plusMinus">
          <button onClick={onRemove}>-</button>
          <button onClick={onAdd}>+</button>
        </div>
        <p className="price">
          {item.quantity} x ${item.price}
          
        </p>
      </div>
    );
  });
  

  return (
    <div className='cartPage'>
      <h1>My Cart</h1>
      <p style={{textAlign: "center", fontSize: '1.2rem'}}>{quantity === 0 ? 'Cart is Empty' : ''}</p>
      <div className="checkout">
      {render}
      <p className="totalPrice" style={quantity === 0 ? {display: 'none'} : {display: 'block'}}>Total Price = <span style={{fontWeight: 'bold'}}>${totalPrice}</span></p>
      </div>
      <Elements stripe={stripePromise} >
      <CheckoutForm quantity={quantity} totalPrice={totalPrice}/>
    </Elements>
   
    </div>
  );
}

export default CartItems;
