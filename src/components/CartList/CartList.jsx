import React, { useContext } from 'react';

import CartItem from '../CartItem/CartItem';
import { ProductContexts } from '../../utils/ProductContexts';

const CartList = () => {
  const { cart } = useContext(ProductContexts);

  return (
    <section className='products__list'>
      <div className='products__list--title'>
        <span>Unidades</span>
        <span>Costo</span>
        <span>Total</span>
      </div>
      {cart.map((productId) => (
        <CartItem productId={productId} key={productId} />
      ))}
    </section>
  );
};

export default CartList;
