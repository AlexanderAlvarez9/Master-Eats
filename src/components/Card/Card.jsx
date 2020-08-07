import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import './Card.scss';
import { ProductContexts } from '../../utils/ProductContexts';

const Card = ({ }) => {
  const { products } = useContext(ProductContexts);
  const { addToCart } = useContext(ProductContexts);

  const handleAdd = (id) => {
    products.forEach(item => {
      if (item._id === id) {
        addToCart(item)
      }
    })
  }

  return (
    <>
      {
        products !== undefined
          ? (products.map((item) => (
            <div className="card" key={item._id}>
              <img className="card--img" src={item.originpath} width="135" alt={item.name} />
              <div className="card--text">
                <p className="card--text__name">{item.name}</p>
                <span className="card--text__price">${item.price}</span>
              </div>
              <button className="card--button" onClick={() => handleAdd(item._id)}>Agregar</button>
            </div>
          )))
          : <h1>Sin productos</h1>
      }
    </>
  )
};


Card.propTypes = {
  originpath: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string
}

export default Card;
