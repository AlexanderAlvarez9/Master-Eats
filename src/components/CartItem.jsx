import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item, handleDelete }) => {
  const [cantidad, setCantidad] = useState(1);

  const handlePlus = (e) => {
    e.preventDefault();
    setCantidad(cantidad + 1);
  };

  const handleMinus = (e) => {
    e.preventDefault();
    setCantidad(cantidad - 1);
  };

  return (
    <div className='item' key={item.id}>
      <img src={item.image} width='67' alt='Foto' />
      <p>{item.title}</p>
      <div className='item__cantidad'>
        <a rel='stylesheet' href='#' onClick={handleMinus}>
          <FontAwesomeIcon icon={faMinusCircle} />
        </a>
        <span>{cantidad}</span>
        <a rel='stylesheet' href='#' onClick={handlePlus}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </a>
      </div>
      <p>${item.price}</p>
      <p>${item.price * cantidad}</p>
      <a rel='stylesheet' href='#' onClick={() => handleDelete(item.id)}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </a>
    </div>
  );
};

export default CartItem;
