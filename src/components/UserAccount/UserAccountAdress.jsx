import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const UserAccountAdress = () => {
  return (
    <div className="UserAccount__container__menu-settings">
      <h2>Direccion de entrega</h2>
      <form action="">
        <div className="form-wrapper">
          <div className="form-row">
            <label htmlFor="pname">Direccion</label><br />
            <input type="text" id="calle" placeholder="Avenida Siempre Viva 742" />
          </div>
          <div className="form-row">
            <label htmlFor="barrio">Barrio</label><br />
            <input type="text" id="barrio" placeholder="Spring Fall" />
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form-row">
            <label htmlFor="numeroca">Detalle</label><br />
            <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Casa 'Amarilla'" />
          </div>
          <div className="form-row">
            <label htmlFor="ciudad">Ciudad</label><br />
            <input type="text" id="ciudad" placeholder="Shelbyville " />
          </div>
        </div>
        <div className="form-button">
          <Link to="/success"><button type="submit" form="" value="Submit">Guardar</button></Link>
        </div>
      </form>
    </div>
  )
}

export default UserAccountAdress;