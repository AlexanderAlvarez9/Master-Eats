import React from 'react';
import '../components/Admin/AdminAccount.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AdminProducts from '../components/Admin/AdminProducts'
import NotFound from './NotFound';
import { useFirebaseApp } from 'reactfire';

const AdminCMS = () => {

  const firebase = useFirebaseApp();

  const handlelogout = async () => {
    await firebase.auth().signOut()
      .then(err => console.log(err))
  }

  return (
    <BrowserRouter>
      <div className="AdminAccount">
        <div className="AdminAccount__container">
          <div className="AdminAccount__container__menu">
            <h2 className="AdminAccount__title">Administracion</h2>
            <ul>
              <li><Link to="/adminProducts">Productos</Link></li>
              <li><Link to="/" onClick={handlelogout}>Cerrar sesion</Link></li>
            </ul>
          </div>
        </div>
        <div className="AdminAccount__containers">
          <Route path="/adminProducts" component={AdminProducts} />
          <Route path="/notFound" component={NotFound} />
        </div>
      </div>
      <div className="back-img">
        <img src="./src/assets/img/shopping.svg" alt="BackImage" />
      </div>
    </BrowserRouter>
  )
}

export default AdminCMS;
