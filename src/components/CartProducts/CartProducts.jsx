/* eslint-disable jsx-quotes */
import React from 'react';
import CartList from '../CartList/CartList';
import CartCards from '../CartCards/CartCards';
import './CartProducts.scss';

const Products = ({ state }) => (
  <div>
    <section className='products'>
      <CartList state={state} />
      <CartCards />
    </section>
  </div>
);

export default Products;
