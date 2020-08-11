/* eslint-disable jsx-quotes */
import React, { useContext } from 'react';
import CartList from '../CartList/CartList';
import CartCards from '../CartCards/CartCards';
import './CartProducts.scss';
import { ProductContexts } from '../../utils/ProductContexts';


const Products = () => {

  return (
    <section className='products'>
      <CartList />
      <CartCards />
    </section>
  )
};

export default Products;
