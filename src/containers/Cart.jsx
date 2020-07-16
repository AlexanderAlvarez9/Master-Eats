import React from 'react';
import '../assets/styles/Styles.scss';
import CartMain from '../components/CartMain';
import Container from '../containers/Containers';

const Cart = () => (
  <Container>
    <div className="Cart">
      <CartMain />
    </div>
  </Container>
);

export default Cart;
