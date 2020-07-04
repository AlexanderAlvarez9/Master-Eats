/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-quotes */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import cerveza from '../assets/img/cerveza.png';

const CartList = () => (
  <section className="products__list">
    <div className="products__list--title">
      <span>Unidades</span>
      <span>Costo</span>
      <span>Total</span>
    </div>
    <div className="item">
      <img src={cerveza} width="67" alt="Foto" />
      <p>Cerveza Botella</p>
      <div className="item__cantidad">
        <a rel="stylesheet" href="#">
          <FontAwesomeIcon icon={faMinusCircle} />
        </a>
        <span>12</span>
        <a rel="stylesheet" href="#">
          <FontAwesomeIcon icon={faPlusCircle} />
        </a>
      </div>
      <p>$12.000</p>
      <p>144.000</p>
      <a rel="stylesheet" href="#">
        <FontAwesomeIcon icon={faTimesCircle} />
      </a>
    </div>
    <div className="item">
      <img src={cerveza} width="67" alt="Foto" />
      <p>Cerveza Botella</p>
      <div className="item__cantidad">
        <a rel="stylesheet" href="#">
          <FontAwesomeIcon icon={faMinusCircle} />
        </a>
        <span>12</span>
        <a rel="stylesheet" href="#">
          <FontAwesomeIcon icon={faPlusCircle} />
        </a>
      </div>
      <p>$12.000</p>
      <p>144.000</p>
      <a rel="stylesheet" href="#">
        <FontAwesomeIcon icon={faTimesCircle} />
      </a>
    </div>
    <div className="item">
      <img src={cerveza} width="67" alt="Foto" />
      <p>Cerveza Botella</p>
      <div className="item__cantidad">
        <a rel="stylesheet" href="#">
          <FontAwesomeIcon icon={faMinusCircle} />
        </a>
        <span>12</span>
        <a rel="stylesheet" href="#">
          <FontAwesomeIcon icon={faPlusCircle} />
        </a>
      </div>
      <p>$12.000</p>
      <p>144.000</p>
      <a rel="stylesheet" href="#">
        <FontAwesomeIcon icon={faTimesCircle} />
      </a>
    </div>
    <div className="item">
      <img src={cerveza} width="67" alt="Foto" />
      <p>Cerveza Botella</p>
      <div className="item__cantidad">
        <a rel="stylesheet" href="#">
          <FontAwesomeIcon icon={faMinusCircle} />
        </a>
        <span>12</span>
        <a rel="stylesheet" href="#">
          <FontAwesomeIcon icon={faPlusCircle} />
        </a>
      </div>
      <p>$12.000</p>
      <p>144.000</p>
      <a rel="stylesheet" href="#">
        <FontAwesomeIcon icon={faTimesCircle} />
      </a>
    </div>
  </section>
);

export default CartList;
