import React from 'react';
import '../styles/nav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav(props) {
  const { quantity } = props;

  return (
    <div className='topNav'>
      <div className='nav'>
        <a id='home'  href='#home'>
          Home
        </a>
        <a id='store' className="active" href="#store">
          Store
        </a>
        <a id='about' href='#about'>
          About{' '}
        </a>
      </div>
      <div>
        <a id='cartBtn' href='/cart'>
          <ShoppingCartIcon fontSize='large' />
          <div className='quantity' style={ quantity === 0 ? {display: 'none'} : {display: 'block'} }> {quantity} </div>
        </a>
      </div>
    </div>
  );
}

export default Nav;
