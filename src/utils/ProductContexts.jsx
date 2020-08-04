import React, { createContext, useState } from 'react';
import useInitialState from '../hooks/useInitialState';


export const ProductContexts = createContext();

const ProductsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const API = 'https://alejoortizd.tech/api/products';
  // const API = 'http://104.248.123.166:8000/api/products';
  const initialState = useInitialState(API);
  const products = initialState.data;

  return (
    <ProductContexts.Provider value={{ products, cart, setCart }}>
      {children}
    </ProductContexts.Provider>
  );
}

export default ProductsProvider;