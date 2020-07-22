import React from 'react';
import CartProducts from './CartProducts';
import CartSumary from './CartSumary';

const CartMain = ({ state }) => (
  <main className='content'>
    <CartProducts state={state} />
    <CartSumary />
  </main>
);

export default CartMain;
