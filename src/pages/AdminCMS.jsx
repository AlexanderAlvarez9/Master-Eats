import React from 'react';
import '../assets/styles/components/AdminAccount.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AdminProducts from '../components/AdminProducts'

const AdminCMS = () => {
  return (
    <BrowserRouter>
      <div className="AdminAccount">
        <div className="AdminAccount__container">
          <div className="AdminAccount__container__menu">
            <h2 className="AdminAccount__title">Administracion</h2>
            <ul>
              <li><Link to="/adminProducts">Productos</Link></li>
              <li><Link to="/">Cerrar sesion</Link></li>
            </ul>
          </div>
        </div>
        <div className="AdminAccount__containers">
          <Route path="/adminProducts" component={AdminProducts} />
        </div>
      </div>
      <div className="back-img">
        <img src="./src/assets/img/shopping.svg" alt="BackImage" />
      </div>
    </BrowserRouter>
  )
}

export default AdminCMS;