import React from 'react';
import './UserAccount.scss';

const UserAccountPayment = () => {
  return (
    <div className="UserAccount__container__menu-settings">
      <h2>Tus Metodos de Pago</h2>
      <form action="">
        <div className="form-wrapper">
          <div className="form-row">
            <label htmlFor="pname">Tarjeta de Credito #:</label><br />
            <input type="text" id="calle" disabled="disable" placeholder="**** 4587" />
          </div>
          <div className="form-row">
            <label htmlFor="lname">Nombre:</label><br />
            <input type="text" id="barrio" disabled="disable" placeholder="Juan Carlos Gomez" />
          </div>
        </div>
        <div className="form-button">
          <button type="submit" form="" value="Submit">Modificar</button>
        </div>
      </form>
    </div>
  )
}

export default UserAccountPayment;