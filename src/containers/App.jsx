import React, { useState } from 'react';
import '../assets/styles/components/App.scss';

import Containers from './Containers';
import Layout from '../components/Layout';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import Success from '../components/Success';
import UserAccount from '../components/UserAccount';
import NotFound from '../components/NotFound';
import CartMain from './Cart';
import Form from '../pages/Form'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';

const API = 'https://my.api.mockaroo.com/mastereats.json?key=60f8dc70';


function App() {
  const initialState = useInitialState(API);
  const [catego, setCatego] = useState(0);

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
            <Route exact path="/UserAccount" component={UserAccount} />
            {/* <Route component={NotFound} /> */}
          </Switch>

          <Containers>
            <ul>
              <li><Link to="/Form">Login - Register</Link></li>
              <li><Link to="/Success">Success</Link></li>
              <li><Link to="/NotFound">NotFound</Link></li>
            </ul>
          </Containers>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
