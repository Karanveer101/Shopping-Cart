import Nav from './navbar/nav'
import Store from './pages/store'
import React from 'react';

function App(props) {
  
  const { quantity, setQuantity, cartItems, setCartItems } = props
    

  return (
    <div className="App">
      <Nav quantity={quantity} setQuantity={setQuantity} cartItems={cartItems} setCartItems={setCartItems}/>
      <Store quantity={quantity} setQuantity={setQuantity} cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
}

export default App;
