import React, { useContext } from 'react';
import { ProductContexts } from '../utils/ProductContexts';
import Categories from '../components/Categories/Categories';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer';
import Card from '../components/Card/Card';

const Home = () => {

  return (
    <div className="Home">
      <Categories title='Todos Los Productos'>
        <ProductsContainer>
          <Card />
        </ProductsContainer>
      </Categories>
    </div>
  );
};

export default Home;