import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import cerveza from '../../assets/img/cerveza.png';
import { ProductContexts } from '../../utils/ProductContexts';

const CartCards = () => {

  const { products } = useContext(ProductContexts);

  const random = Math.floor(Math.random() * products.length);
  const random2 = random + 4;

  return (
    <section className="products__cards" >
      <div className="products__cards--title">
        <span>
          <FontAwesomeIcon icon={faBeer} />
        </span>
        <h1>Olvidaste algo?</h1>
      </div>
      <div className="products__cards--container">

        {
          products !== undefined
            ? (products.slice(random, random2).map((item) => (

              <div className="card" key={item._id}>
                <img src={item.originpath} width="100" alt="foto" />
                <p>{item.name}</p>
                <span>
                  <b>${item.price}</b>
                </span>
                <button>Agregar</button>
              </div>
            )))
            : <h1>Sin productos</h1>
        }
      </div>
    </section>
  )
};

export default CartCards;