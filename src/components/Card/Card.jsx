import React from 'react';
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ name, price, originpath, category }) => {

  return (
    <div className="card">
      <img className="card--img" src={originpath} width="135" alt={name} />
      <div className="card--text">
        <p className="card--text__name">{name}</p>
        <span className="card--text__price">${price}</span>
      </div>
      <button className="card--button">Agregar</button>
    </div>
  )
};

Card.propTypes = {
  originpath: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string
}

export default Card;
