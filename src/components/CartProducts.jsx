/* eslint-disable jsx-quotes */
import React from 'react';
import CartList from './CartList';
import CartCards from './CartCards';

const Products = (children) => (
  <div>
    <section className="products">
      <CartList />
      <CartCards />
    </section>
  </div>
);

export default Products;
