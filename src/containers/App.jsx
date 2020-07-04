/* eslint-disable jsx-quotes */
import React from 'react';
import '../assets/styles/Styles.scss';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Sumary from '../components/Sumary';

const App = () => (
  <div className="App">
    <Cart>
      <Products />
      <Sumary />
    </Cart>
  </div>
);
export default App;
