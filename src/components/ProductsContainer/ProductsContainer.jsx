import React, { Children } from 'react';
import './ProductsContainer.scss'

const ProductsContainer = ({ children }) => (
  <section className="ProductsContainer">
    <div className="products__cards--container">
      {children}
    </div>
  </section>
)

export default ProductsContainer;