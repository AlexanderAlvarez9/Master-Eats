import React, { Component } from 'react';

const UserAccountAdress = () => {
  return (
    <div className="UserAccount__container__menu-settings">
      <h2>Direccion de entrega</h2>
      <form action="">
        <div className="form-wrapper">
          <div className="form-row">
            <label htmlFor="pname">Calle</label><br />
            <input type="text" id="calle" />
          </div>
          <div className="form-row">
            <label htmlFor="barrio">Barrio</label><br />
            <input type="text" id="barrio" />
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form-row">
            <label htmlFor="numeroca">Numero</label><br />
            <input type="tel" id="numeroca" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </div>
          <div className="form-row">
            <label htmlFor="ciudad">Ciudad</label><br />
            <input type="text" id="ciudad" />
          </div>
        </div>
        <div className="form-button">
          <button type="submit" value="Submit">Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default UserAccountAdress;