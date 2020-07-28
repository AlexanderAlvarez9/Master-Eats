import React, { useState } from 'react';
import '../assets/styles/components/App.scss';
import '../assets/styles/components/Globales.scss';

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Containers from '../containers/Containers';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import ProductsContainer from '../components/ProductsContainer';
import Card from '../components/Card';
import Success from '../pages/Success';
import UserAccount from '../pages/UserAccount';
import NotFound from '../pages/NotFound';
import CartMain from '../pages/Cart';
import Form from '../pages/Form';
import useInitialState from '../hooks/useInitialState';

const API = 'https://my.api.mockaroo.com/mastereats.json?key=60f8dc70';
//Use in emergency
//const API = 'https://my.api.mockaroo.com/mastereats.json?key=65f14490';

function App() {
  const initialState = useInitialState(API);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Containers>

            <Switch>
              <Route
                exact
                path='/'
                render={() =>
                  initialState.length > 0 && (
                    <Categories title='Categoria Dinamica'>
                      <ProductsContainer>
                        {initialState.map((item) => (
                          <Card key={item.id} {...item} />
                        ))}
                      </ProductsContainer>
                    </Categories>
                  )
                }
              />
              <Route exact path='/success' component={Success} />
              <Route exact path='/notFound' component={NotFound} />
              <Route exact path='/cart'>
                {initialState.length > 0 && <CartMain state={initialState} />}
              </Route>
              <Route exact path='/sign' component={Form} />
              <Route exact path='/account' component={UserAccount} />
              <Route component={NotFound} />
            </Switch>

            <ul>
              <li>
                <Link to='/sign'>Login - Register</Link>
              </li>
              <li>
                <Link to='/success'>Success</Link>
              </li>
              <li>
                <Link to='/notFound'>NotFound</Link>
              </li>
            </ul>

          </Containers>

        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
