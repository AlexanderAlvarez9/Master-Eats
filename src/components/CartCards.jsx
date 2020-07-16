/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-quotes */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import cerveza from '../assets/img/cerveza.png';

const CartCards = () => (
  <section className="products__cards">
    <div className="products__cards--title">
      <span>
        <FontAwesomeIcon icon={faBeer} />
      </span>
      <h1>Olvidaste algo?</h1>
    </div>
    <div className="products__cards--container">
      <div className="card">
        <img src={cerveza} width="135" alt="foto" />
        <p>Cerveza Corona</p>
        <span>
          <b>$78.00</b>
        </span>
        <button>Agregar</button>
      </div>
      <div className="card">
        <img src={cerveza} width="135" alt="foto" />
        <p>Cerveza Corona</p>
        <span>
          <b>$78.00</b>
        </span>
        <button>Agregar</button>
      </div>
      <div className="card">
        <img src={cerveza} width="135" alt="foto" />
        <p>Cerveza Corona</p>
        <span>
          <b>$78.00</b>
        </span>
        <button>Agregar</button>
      </div>
      <div className="card">
        <img src={cerveza} width="135" alt="foto" />
        <p>Cerveza Corona</p>
        <span>
          <b>$78.00</b>
        </span>
        <button>Agregar</button>
      </div>
    </div>
  </section>
);

export default CartCards;
