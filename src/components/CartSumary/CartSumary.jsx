import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkedAlt,
  faCreditCard,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import './CartSumary.scss';
import { Link } from 'react-router-dom';
import { ProductContexts, getProduct } from '../../utils/ProductContexts';

const Sumary = () => {
  const { products, cart, quantityById } = useContext(ProductContexts);

  function getTotal() {
    return cart
      .map(
        (productId) =>
          getProduct(products, productId).price * quantityById[productId]
      )
      .reduce((total, currSubtotal) => total + currSubtotal, 0)
      .toFixed(2);
  }

  return (
    <section className='sumary'>
      <h2>Pedido</h2>
      <div className='sumary__location'>
        <FontAwesomeIcon icon={faMapMarkedAlt} />
        <div className='sumary__location--location'>
          <span>
            <b>Direccion de entrega</b>
          </span>
          <span>Calle falsa #123</span>
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
        <h1>Total: ${getTotal()}</h1>
      </div>
      <Link to="success"><button type='button'>Completar pedido</button></Link>
      {/* <Link to="notFound"><button type='button'>Completar pedido</button></Link> */}
    </section>
  );
};

export default Sumary;
