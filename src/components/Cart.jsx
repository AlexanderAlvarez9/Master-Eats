/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-quotes */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTimesCircle, faBeer } from '@fortawesome/free-solid-svg-icons';
import cerveza from '../assets/img/cerveza.png';

const Cart = ({ children }) => (
  <div>
    <main className="content">{children}</main>
  </div>
);

export default Cart;
