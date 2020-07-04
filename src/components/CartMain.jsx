/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-quotes */
import React from 'react';
import CartProducts from './CartProducts';
import CartSumary from './CartSumary';

const CartMain = () => (
  <main className="content">
    <CartProducts />
    <CartSumary />
  </main>
);

export default CartMain;
