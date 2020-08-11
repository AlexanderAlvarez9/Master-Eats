import React, { useState, useContext } from 'react';

import CartItem from '../CartItem/CartItem';
import { ProductContexts } from '../../utils/ProductContexts';

const CartList = ({ }) => {
  const { cart } = useContext(ProductContexts);
  const products = cart;

  const handleDelete = (id) => {
    products.forEach((product, i) => {
      if (product.id === id) {
        products.splice(i, 1);
      }
    });
    setProduct([...products]);
  };

  return (
    <section className='products__list'>
      <div className='products__list--title'>
        <span>Unidades</span>
        <span>Costo</span>
        <span>Total</span>
      </div>
      {products.map((item) => (
        <CartItem item={item} key={item._id} handleDelete={handleDelete} />
      ))}
    </section>
  );
};

export default CartList;