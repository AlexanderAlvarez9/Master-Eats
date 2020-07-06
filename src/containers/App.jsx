import React from 'react';
import '../assets/styles/components/App.scss';

import Containers from './Containers';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import Success from '../components/Success';
import NotFound from '../components/NotFound';

function App() {
  const initialState = [
    {
      'id': 1,
      'image': '../assets/imgs/cerveza.png',
      'title': 'Carne de res',
      'price': 12000,
      'categorie': 'Carnes',
    },
    {
      'id': 2,
      'image': '../assets/imgs/img.png',
      'title': 'Zanahoria',
      'price': 1000,
      'categorie': 'Verdura',
    },
    {
      'id': 3,
      'image': '../assets/imgs/img.png',
      'title': 'Yogourt',
      'price': 3000,
      'categorie': 'lacteos',
    },
    {
      'id': 4,
      'image': '../assets/imgs/img.png',
      'title': 'Atun',
      'price': 3500,
      'categorie': 'Enlatado',
    },
    {
      'id': 5,
      'image': '../assets/imgs/img.png',
      'title': 'Papas',
      'price': 1500,
      'categorie': 'Snacks',
    },
  ];

  return (
    <React.Fragment>
      <Layout>
        <Containers>
          {initialState.length > 0 && (
            <Categories title="Categoria Dinamica">
              <Carousel>
                {initialState.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          )}
        </Containers>
      </Layout>
    </React.Fragment>
  );
}

export default App;
