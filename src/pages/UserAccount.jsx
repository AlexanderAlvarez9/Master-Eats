import React from 'react';
import '../assets/styles/components/UserAccount.scss';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import UserAccountDetails from '../components/UserAccountDetails';
import UserAccountOrders from '../components/UserAccountOrders';
import UserAccountAdress from '../components/UserAccountAdress';
import UserAccountPayment from '../components/UserAccountPayment';
import NotFound from './NotFound';

const UserAccount = () => (
  <BrowserRouter>
    <div className="UserAccount">
      <div className="UserAccount__container">
        <div className="UserAccount__container__menu">
          <h2>Mi cuenta</h2>
          <ul>
            <li><Link to="/UserAccountDetails">Datos generales</Link></li>
            <li><Link to="/UserAccountAdress" >Direccion de entrega</Link></li>
            <li><Link to="/UserAccountOrders" >Mis Ordenes Recientes</Link></li>
            <li><Link to="UserAccountPayment" >Metodos de pago</Link></li>
            <li><Link to="/">Cerrar sesion</Link></li>
          </ul>
        </div>
      </div>
      <div className="UserAccount__containers">
        <Route exact path="/UserAccountDetails" component={UserAccountDetails} />
        <Route path="/UserAccountAdress" component={UserAccountAdress} />
        <Route path="/UserAccountPayment" component={UserAccountPayment} />
        <Route path="/UserAccountOrders" component={UserAccountOrders} />
        <Route path="/" component={NotFound} />
      </div>
    </div>
    <div className="back-img">
      <img src="../src/assets/img/undraw_my_current_location_om7g.svg" alt="" />
    </div>
  </BrowserRouter>
)

export default UserAccount;