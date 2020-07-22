/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import cerveza from '../assets/img/cerveza.png';

const CartList = ({ state }) => {
  const [cantidad, setCantidad] = useState(1);
  const handlePlus = (e) => {
    e.preventDefault();
    setCantidad(cantidad + 1);
  };
  const handleMinus = (e) => {
    e.preventDefault();
    setCantidad(cantidad - 1);
  };
  const handleDelete = (e, id) => {
    // e.preventDefault();
    // console.log(e);
    const ids = item.id;
    console.log(ids);
  };
  return (
    <section className='products__list'>
      <div className='products__list--title'>
        <span>Unidades</span>
        <span>Costo</span>
        <span>Total</span>
      </div>
      {state.map((item) => (
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
      ))}
      {/* <div className='item'>
        <img src={cerveza} width='67' alt='Foto' />
        <p>Cerveza Botella</p>
        <div className='item__cantidad'>
          <a rel='stylesheet' href='#'>
            <FontAwesomeIcon icon={faMinusCircle} />
          </a>
          <span>12</span>
          <a rel='stylesheet' href='#'>
            <FontAwesomeIcon icon={faPlusCircle} />
          </a>
        </div>
        <p>$12.000</p>
        <p>144.000</p>
        <a rel='stylesheet' href='#'>
          <FontAwesomeIcon icon={faTimesCircle} />
        </a>
      </div>
      <div className='item'>
        <img src={cerveza} width='67' alt='Foto' />
        <p>Cerveza Botella</p>
        <div className='item__cantidad'>
          <a rel='stylesheet' href='#'>
            <FontAwesomeIcon icon={faMinusCircle} />
          </a>
          <span>12</span>
          <a rel='stylesheet' href='#'>
            <FontAwesomeIcon icon={faPlusCircle} />
          </a>
        </div>
        <p>$12.000</p>
        <p>144.000</p>
        <a rel='stylesheet' href='#'>
          <FontAwesomeIcon icon={faTimesCircle} />
        </a>
      </div>
      <div className='item'>
        <img src={cerveza} width='67' alt='Foto' />
        <p>Cerveza Botella</p>
        <div className='item__cantidad'>
          <a rel='stylesheet' href='#'>
            <FontAwesomeIcon icon={faMinusCircle} />
          </a>
          <span>12</span>
          <a rel='stylesheet' href='#'>
            <FontAwesomeIcon icon={faPlusCircle} />
          </a>
        </div>
        <p>$12.000</p>
        <p>144.000</p>
        <a rel='stylesheet' href='#'>
          <FontAwesomeIcon icon={faTimesCircle} />
        </a>
      </div> */}
    </section>
  );
};

export default CartList;
