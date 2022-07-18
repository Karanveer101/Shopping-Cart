import React, {useState, useEffect} from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import Nav from './navbar/nav';
import CartItems from './pages/cartItems';
import Store from './pages/store';

const RouteSwitch = () => {
    const[quantity, setQuantity] = useState(() => {
        const saved = localStorage.getItem('quantity');
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
      });
    
      useEffect(() => {
       localStorage.setItem('quantity', JSON.stringify(quantity))
      }, [quantity])
    
    
      const [cartItems, setCartItems] = useState(() => {
    
          const saved = localStorage.getItem('items');
          const initialValue = JSON.parse(saved);
          return initialValue || [];
        });
        console.log(cartItems)
    
        useEffect(() => {
      
          localStorage.setItem("items", JSON.stringify(cartItems));
        }, [cartItems]);
        
        
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App quantity={quantity} setQuantity={setQuantity} cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path='/nav' element={<Nav quantity={quantity} setQuantity={setQuantity} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path='/cart' element={<CartItems quantity={quantity} setQuantity={setQuantity} cartItems={cartItems} setCartItems={setCartItems}  />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
