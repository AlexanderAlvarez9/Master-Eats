/* eslint-disable jsx-quotes */
import React from 'react';
import CartList from '../CartList/CartList';
import CartCards from '../CartCards/CartCards';
import './CartProducts.scss';

const Products = () => (
  <section className='products'>
    <CartList />
    <CartCards />
  </section>
);

export default Products;
