import React from 'react';
import '../assets/styles/components/App.scss';

import Containers from './Containers';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import Success from '../components/Success';
import NotFound from '../components/NotFound';
import CartMain from './Cart';
import Form from '../pages/Form'

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const initialState = [
    {
      'id': 1,
      'image': '../assets/img/cerveza.png',
      'title': 'Carne de res',
      'price': 12000,
      'categorie': 'Carnes',
    },
    {
      'id': 2,
      'image': '../assets/img/cerveza.png',
      'title': 'Zanahoria',
      'price': 1000,
      'categorie': 'Verdura',
    },
    {
      'id': 3,
      'image': '../assets/img/cerveza.png',
      'title': 'Yogourt',
      'price': 3000,
      'categorie': 'lacteos',
    },
    {
      'id': 4,
      'image': '../assets/img/cerveza.png',
      'title': 'Atun',
      'price': 3500,
      'categorie': 'Enlatado',
    },
    {
      'id': 5,
      'image': '../assets/img/cerveza.png',
      'title': 'Papas',
      'price': 1500,
      'categorie': 'Snacks',
    },
  ];

  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path="/" render={() => (
              initialState.length > 0 &&
              <Categories title="Categoria Dinamica">
                <Carousel>
                  {initialState.map(item =>
                    <Card key={item.id} {...item} />
                  )}
                </Carousel>
              </Categories>


            )} />
            <Route exact path="/Success" component={Success} />
            <Route exact path="/NotFound" component={NotFound} />
            <Route exact path="/CartMain" component={CartMain} />
            <Route exact path="/Form" component={Form} />
            {/* <Route component={NotFound} /> */}
          </Switch>

          <Containers>
            <ul>
              <li><Link to="/Success">Success</Link></li>
              <li><Link to="/NotFound">NotFound</Link></li>
              <li><Link to="/Form">Form</Link></li>
            </ul>
          </Containers>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
