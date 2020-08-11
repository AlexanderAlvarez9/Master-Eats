import React, { useContext } from 'react';
import { ProductContexts } from '../utils/ProductContexts';
import Categories from '../components/Categories/Categories';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer';
import Card from '../components/Card/Card';

const Home = () => {

  // const { products } = useContext(ProductContexts);
  return (
    <div className="Home">
      <Categories title='Carnes'>
        <ProductsContainer>
          <Card />
        </ProductsContainer>
      </Categories>
    </div>
  );
};

export default Home;