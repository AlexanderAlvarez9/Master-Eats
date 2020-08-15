import React from 'react';
import './UserAccount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';

const UserAccountOrders = () => {


  const firebase = useFirebaseApp();

  const handlelogout = async () => {
    await firebase.auth().signOut()
      .then(err => console.log(err))
  }

  return (
    <div className="UserAccount__container__menu-settings">
      <div className="order">
        <h2 className="title">Mis Ordenes Recientes</h2>


        <table>
          <thead>
            <tr>
              <td>Pedido #</td>
              <td>Cantidad de Productos:</td>
              <td>Costo Total:</td>
              <td>Fecha:</td>
              <td>Volver a pedir</td>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>1</td>
              <td>14</td>
              <td>$215.000</td>
              <td>13/08/2020</td>
              <td>
                <Link to="/notFound"><i className="card--button"><FontAwesomeIcon className="faRecycle actions" icon={faRecycle} title="Edit" /></i></Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>6</td>
              <td>$15.000</td>
              <td>13/08/2020</td>
              <td>
                <Link to="/notFound"><i className="card--button"><FontAwesomeIcon className="faRecycle actions" icon={faRecycle} title="Edit" /></i></Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>10</td>
              <td>$346.000</td>
              <td>13/08/2020</td>
              <td>
                <Link to="/notFound"><i className="card--button"><FontAwesomeIcon className="faRecycle actions" icon={faRecycle} title="Edit" /></i></Link>
              </td>
            </tr>


          </tbody>
        </table>



      </div>
    </div>
  )
}

export default UserAccountOrders;