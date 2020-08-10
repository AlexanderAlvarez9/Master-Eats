import React, { useContext } from 'react';
import './Card.scss';
import { ProductContexts, getProduct } from '../../utils/ProductContexts';

const CardItem = ({ productId }) => {
  const { products, addToCart } = useContext(ProductContexts);
  const { originpath, name, price } = getProduct(products, productId);

  return (
    <div className='card' key={productId}>
      <img className='card--img' src={originpath} width='135' alt={name} />
      <div className='card--text'>
        <p className='card--text__name'>{name}</p>
        <span className='card--text__price'>${price}</span>
      </div>
      <button className='card--button' onClick={() => addToCart(productId)}>
        Agregar
      </button>
    </div>
  );
};

const Card = () => {
  const { products } = useContext(ProductContexts);

  return (
    <>
      {products !== undefined ? (
        Object.keys(products).map((productId) => (
          <CardItem key={productId} productId={productId} />
        ))
      ) : (
        <h1>Sin productos</h1>
      )}
    </>
  );
};

export default Card;
