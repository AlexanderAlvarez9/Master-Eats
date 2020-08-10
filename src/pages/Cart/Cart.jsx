import React from 'react';
import '../../assets/styles/components/Globales.scss';

import './CartIcon.scss';
import CartProducts from '../../components/CartProducts/CartProducts';
import CartSumary from '../../components/CartSumary/CartSumary';

const Cart = () => {
  return (
    <div className='content'>
      <CartProducts />
      <CartSumary />
    </div>
  );
};

export default Cart;
