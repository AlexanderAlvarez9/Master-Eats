import React from 'react';

import Layout from '../components/Layout'
import HelloWorld from '../components/HelloWorld';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

function App() {
  const initialState = [
    {
      'id': 1,
      'image': '../assets/imgs/img.png',
      'title': 'Carne de res',
      'price': 10234,
      'categorie': 'Carnes'
    },
    {
      'id': 2,
      'image': '../assets/imgs/img.png',
      'title': 'Zanahoria',
      'price': 10678,
      'categorie': 'Verdura'
    },
    {
      'id': 3,
      'image': '../assets/imgs/img.png',
      'title': 'Leche de cabra',
      'price': 5678,
      'categorie': 'lacteos'
    }
  ];

  return (
    <React.Fragment>
      <Layout>

        {initialState.length > 0 &&

          <Categories title="Mi Lista">
            <Carousel>
              {initialState.map(item =>
                <CarouselItem key={item.id} {...item} />
              )}
            </Carousel>
          </Categories>
        }


      </Layout>
    </React.Fragment>
  )
}

export default App;