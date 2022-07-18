import storedItems from '../data/items.json';
import '../styles/items.css';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import Nav from '../navbar/nav';

function Store(props) {
  const { quantity, setQuantity, setCartItems, cartItems } = props;
  console.log(props);
  
  const render = storedItems.map((item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    console.log(cartItems)
    console.log(storedItems)
    
    const onAdd = () => {

      


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

    const emptyCartItem = () => {
      setQuantity(quantity - item.quantity);
      item.quantity = 0
      exist.quantity = 0
      const filter = cartItems.filter((x) => x.id !== item.id);
      
      setCartItems(filter);

      console.log(item.quantity)
      console.log(exist.quantity)
      
    }

    const renderButtons = () => {
      return (
        <div className='expand'>
          <button onClick={onRemove} className='removeBtn'>
            -
          </button>
          <p> {item.quantity} in cart</p>
          <button onClick={onAdd} className='addBtn'>
            +
          </button>
          <button onClick={emptyCartItem} className='deleteBtn'>
            <DeleteIcon />
          </button>
        </div>
      );
    };

    return (
      <div key={item.id} className='item'>
        <img alt='' src={item.imgUrl} />
        <h3>{item.name}</h3>
        {item.quantity === 0 ? (
          <button onClick={onAdd} className='addToCartBtn'>
            + Add To Cart
          </button>
        ) : (
          renderButtons()
        )}
      </div>
    );
  });

  return (
    <div>
      <h1>Store</h1>
      <div className='itemWrapper'>{render}</div>
    </div>
  );
}

export default Store;
