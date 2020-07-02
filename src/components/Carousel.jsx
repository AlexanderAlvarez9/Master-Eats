import React, { Children } from 'react';
import '../assets/styles/components/Carousel.scss'

const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="products__cards--container">
      {children}
    </div>
  </section>
)

export default Carousel;