/* eslint-disable jsx-quotes */
import React from 'react';
import List from './List';
import Cards from './Cards';

const Products = (children) => (
  <div>
    <section className="products">
      <List />
      <Cards />
    </section>
  </div>
);

export default Products;
