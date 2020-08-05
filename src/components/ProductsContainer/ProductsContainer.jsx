import React, { Children } from 'react';
import './ProductsContainer.scss'

const ProductsContainer = ({ children }) => (
  <section className="ProductsContainer">
    <div className="products__cards--container">
      {/* {products !== undefined ?
        (products.map((item) => (
          <Card key={item._id} {...item} />
        ))) : <h1>SIn productos</h1>
      } */}
      {children}
    </div>
  </section>
)

export default ProductsContainer;