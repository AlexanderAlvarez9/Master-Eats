import React from 'react';
import '../assets/styles/Styles.scss';
import CartMain from '../components/CartMain';
// import Container from '../containers/Containers';

const Cart = ({ initialState }) => (
  // <Container>
  <div className='Cart'>
    <CartMain state={initialState} />
  </div>
  // </Container>
);

export default Cart;
