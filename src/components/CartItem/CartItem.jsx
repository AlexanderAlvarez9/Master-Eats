import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  ProductContexts,
  getProduct,
  getProductSubtotal,
} from '../../utils/ProductContexts';

const CartItem = ({ productId }) => {
  const {
    products,
    quantityById,
    increaseInCart,
    decreaseInCart,
    deleteFromCart,
  } = useContext(ProductContexts);
  const { originpath, name, price } = getProduct(products, productId);

  function handleMinus(event) {
    event.preventDefault();
    decreaseInCart(productId);
    if (quantityById[productId] === 0) {
      deleteFromCart(productId);
    }
  }

  function handlePlus(event) {
    event.preventDefault();
    increaseInCart(productId);
  }

  function handleDelete(event) {
    event.preventDefault();
    deleteFromCart(productId);
  }

  if (quantityById[productId] === 0) {
    return null;
  }

  return (
    <div className='item'>
      <img src={originpath} width='80' height='80' alt={name} />
      <p>{name}</p>

      <div className='item__cantidad'>
        <button
          type='button'
          disabled={quantityById[productId] === 1}
          onClick={handleMinus}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <span>{quantityById[productId]}</span>
        <button onClick={handlePlus}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>

      <p>
        $
        {price}
      </p>
      <p className='item__total'>
        $
        {getProductSubtotal(products, quantityById, productId)}
      </p>
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </div>
  );
};

export default CartItem;
