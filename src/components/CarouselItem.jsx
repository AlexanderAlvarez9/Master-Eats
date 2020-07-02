import React from 'react';
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = ({ cover, title, price, categorie }) => (
  <div className="carousel-item">
    <img className="carousel-item__img"
      src={cover}
      alt={title} />
    <div className="carousel-item__details">
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {`${categorie}`}
      </p>
    </div>
    <p className="carousel-item__details--price">{price}</p>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  categorie: PropTypes.string
}

export default CarouselItem;