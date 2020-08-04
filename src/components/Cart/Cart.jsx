import React from 'react';
import '../../assets/styles/components/Globales.scss';

import './CartIcon.scss';
import CartProducts from '../CartProducts/CartProducts';
import CartSumary from '../CartSumary/CartSumary';

const Cart = ({ state }) => (
  <div className='content'>
    <CartProducts state={state} />
    <CartSumary />
  </div>
);

export default Cart;
