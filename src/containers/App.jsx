import React from 'react';

import Layout from '../components/Layout'
import HelloWorld from '../components/HelloWorld';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import Containers from './Containers';

function App() {
  const initialState = [
    {
      'id': 1,
      'image': '../assets/imgs/cerveza.png',
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
      'id': 4,
      'image': '../assets/imgs/img.png',
      'title': 'Zapato',
      'price': 3452,
      'categorie': 'Chancla'
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

        <Containers>

          {initialState.length > 0 &&

            <Categories title="Mi Lista">
              <Carousel>
                {initialState.map(item =>
                  <Card key={item.id} {...item} />
                )}
              </Carousel>
            </Categories>
          }
        </Containers>

      </Layout>
    </React.Fragment>
  )
}

export default App;