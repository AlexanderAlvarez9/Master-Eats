import React, { createContext, useReducer } from 'react';
import reducer from './Reducer';
import { addCart, removeCart, plus, minus } from './Action';
import data from './savePorfolio.json';

export const ProductContexts = createContext();

const ProductsProvider = ({ children }) => {
  const products = data.data;

  const [{ cart, quantityById }, dispatch] = useReducer(reducer, {
    cart: [],
    quantityById: {},
  });

  const addToCart = (productId) => dispatch(addCart(productId));
  const deleteFromCart = (productId) => dispatch(removeCart(productId));
  const increaseInCart = (productId) => dispatch(plus(productId));
  const decreaseInCart = (productId) => dispatch(minus(productId));

  return (
    <ProductContexts.Provider
      value={{
        products,
        cart,
        quantityById,
        addToCart,
        deleteFromCart,
        increaseInCart,
        decreaseInCart,
      }}
    >
      {children}
    </ProductContexts.Provider>
  );
};

export default ProductsProvider;

export const getProduct = (products, id) => products[id];
export const getProductSubtotal = (products, qtyById, id) => (products[id].price * qtyById[id]).toFixed(2);
