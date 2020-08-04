import React from 'react';
import '../assets/styles/components/Globales.scss';

import '../assets/styles/components/CartIcon.scss';
import CartProducts from '../components/CartProducts/CartProducts';
import CartSumary from '../components/CartSumary/CartSumary';
// import Container from '../containers/Containers';

const Cart = ({ state }) => (
  // <Container>
  <div className='content'>
    <CartProducts state={state} />
    <CartSumary />
  </div>
  // </Container>
);

export default Cart;
