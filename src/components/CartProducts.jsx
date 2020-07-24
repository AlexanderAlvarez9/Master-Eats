/* eslint-disable jsx-quotes */
import React from 'react';
import CartList from './CartList';
import CartCards from './CartCards';
import '../assets/styles/components/CartProducts.scss';

const Products = ({ state }) => (
  <div>
    <section className='products'>
      <CartList state={state} />
      <CartCards />
    </section>
  </div>
);

export default Products;
