import React, { createContext, useState, useReducer } from 'react';
import useInitialState from '../hooks/useInitialState';
import reducer from './Reducer';
import { addCart, removeCart } from './Action';


export const ProductContexts = createContext();

const ProductsProvider = ({ children }) => {

  const API = 'https://alejoortizd.tech/api/products';
  // const API = 'http://104.248.123.166:8000/api/products';
  const initialState = useInitialState(API);
  const products = initialState.data;

  const [{ cart }, dispatch] = useReducer(reducer, { cart: [] });

  const addToCart = element => dispatch(addCart(element));
  const removeCart = element => dispatch(removeCart(element));

  return (
    <ProductContexts.Provider value={{ products, cart, addToCart, removeCart }}>
      {children}
    </ProductContexts.Provider>
  );
}

export default ProductsProvider;