import React from 'react';
import '../assets/styles/components/UserAccount.scss';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import UserAccountDetails from '../components/UserAccountDetails';
import UserAccountOrders from '../components/UserAccountOrders';
import UserAccountAdress from '../components/UserAccountAdress';
import UserAccountPayment from '../components/UserAccountPayment';

const UserAccount = () => (
  <BrowserRouter>
    <div className="UserAccount">
      <div className="UserAccount__container">
        <div className="UserAccount__container__menu">
          <h2 className="UserAccount__title">Mi cuenta</h2>
          <ul>
            <li><Link to="/UserAccountDetails">Datos Generales</Link></li>
            <li><Link to="/UserAccountAdress" >Direccion de Entrega</Link></li>
            <li><Link to="/UserAccountOrders" >Mis Ordenes Recientes</Link></li>
            <li><Link to="UserAccountPayment" >Metodos de Pago</Link></li>
            <li><Link to="/">Cerrar sesion</Link></li>
          </ul>
        </div>
      </div>
      <div className="UserAccount__containers">
        <Route exact path="/UserAccountDetails" component={UserAccountDetails} />
        <Route path="/UserAccountAdress" component={UserAccountAdress} />
        <Route path="/UserAccountPayment" component={UserAccountPayment} />
        <Route path="/UserAccountOrders" component={UserAccountOrders} />
      </div>
    </div>
    <div className="back-img">
      <img src="./src/assets/img/my_location.svg" alt="BackImage" />
    </div>
  </BrowserRouter>
)

export default UserAccount;