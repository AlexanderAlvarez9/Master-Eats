/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-quotes */
import React, { useState, useEffect } from 'react';

import cerveza from '../assets/img/cerveza.png';
import CartItem from './CartItem';

const CartList = ({ state }) => {
  const [products, setProduct] = useState(state);

  const handleDelete = (id) => {
    const index = products.findIndex((product) => product.id === id);
    products.splice(index, 1);
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
        <CartItem item={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </section>
  );
};

export default CartList;
