import React, { useContext, useEffect } from 'react';
import { ProductContexts, getProduct } from '../../utils/ProductContexts';

const CartCardsItem = ({ productId }) => {
  const { products } = useContext(ProductContexts);
  const { originpath, name, price } = getProduct(products, productId);

  return (
    <div className='card' key={productId}>
      <img src={originpath} width='100' alt='foto' />
      <p>{name}</p>
      <span>
        <b>
          $
          {price}
        </b>
      </span>
      <button>Agregar</button>
    </div>
  );
};

const CartCards = () => {
  const { products } = useContext(ProductContexts);

  const random = Math.floor(Math.random() * products.length);
  const random2 = random + 4;

  return (
    <section className='products__cards'>
      {/* <div className="products__cards--title">
        <span>
          <FontAwesomeIcon icon={faBeer} />
        </span>
        <h1>Olvidaste algo?</h1>
      </div>
      <div className="products__cards--container" >

        {
          products !== undefined ? (
            Object.keys(products).map(productId => (
              <CartCardsItem key={productId} productId={productId} />
            ))
          )
            : <h1>Sin productos</h1>
        }
      </div> */}
    </section>
  );
};

export default CartCards;
