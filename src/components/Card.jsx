import React from 'react';
import PropTypes from 'prop-types'
import '../assets/styles/components/Card.scss'

const Card = ({ title, price, categorie }) => {
  const cover = '/src/assets/imgs/cerveza.png';

  return (
    <div className="card">
      <img className="card--img" src={cover} width="135" alt={title} />
      <div className="card--text">
        <p className="card--text__title">{title}</p>
        <span className="card--text__price">${price}</span>
      </div>
      <button className="card--button">Agregar</button>
    </div>
  )
};

Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  categorie: PropTypes.string
}

export default Card;
