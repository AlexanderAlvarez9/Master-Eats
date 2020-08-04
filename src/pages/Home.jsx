import React, { useContext } from 'react';
import { ProductContexts } from '../utils/ProductContexts';
import Categories from '../components/Categories/Categories';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer';
import Card from '../components/Card/Card';

const Home = () => {

  const { products } = useContext(ProductContexts);
  return (
    <div className="Home">
      <Categories title='Categoria Dinamica'>
        <ProductsContainer>
          {products !== undefined ?
            (products.map((item) => (
              <Card key={item._id} {...item} />
            ))) : <h1>SIn productos</h1>
          }
        </ProductsContainer>
      </Categories>


    </div>
  );
};

export default Home;