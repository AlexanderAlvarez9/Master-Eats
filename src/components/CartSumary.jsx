/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-quotes */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkedAlt,
  faCreditCard,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/CartSumary.scss';

const Sumary = () => (
  <section className='sumary'>
    <h2>Pedido</h2>
    <div className='sumary__location'>
      <FontAwesomeIcon icon={faMapMarkedAlt} />
      <div className='sumary__location--location'>
        <span>
          <b>Direccion de entrega</b>
        </span>
        <span>Calle de mi casa #2569</span>
      </div>
      <FontAwesomeIcon icon={faEdit} />
    </div>
    <div className='sumary__pay'>
      <FontAwesomeIcon icon={faCreditCard} />
      <div className='sumary__pay--pay'>
        <span>
          <b>Metodo de pago:</b>
        </span>
        <span>Tarjeta de credito: 8746</span>
      </div>
      <FontAwesomeIcon icon={faEdit} />
    </div>
    <div className='sumary__pay--title'>
      <h1>Total: $610.00</h1>
    </div>
    <button type='button'>Completar pedido</button>
  </section>
);

export default Sumary;
