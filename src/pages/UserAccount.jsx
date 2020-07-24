import React from 'react';
import '../assets/styles/components/UserAccount.scss';


const UserAccount = () => {
  return (
    <div className="UserAccount">
      <div className="container">
        <div className="container__menu">
          <h2>Mi cuenta</h2>
          <ul>
            <li><a href="#" target="" rel="noopener noreferrer">Datos generales</a></li>
            <li><a href="#" target="" rel="noopener noreferrer">Direccion de entrega</a></li>
            <li><a href="#" target="" rel="noopener noreferrer">Mis pedidos</a></li>
            <li><a href="#" target="" rel="noopener noreferrer">Metodos de pago</a></li>
            <li><a href="#" target="" rel="noopener noreferrer">Cerrar sesion</a></li>
          </ul>
        </div>
        <div className="container__menu-settings">
          <h2>Mi cuenta</h2>
          <form action="">
            <div className="form-wrapper">
              <div className="form-row">
                <label htmlFor="pname">Nombre</label><br />
                <input type="text" id="pname" />
              </div>
              <div className="form-row">
                <label htmlFor="lname">Apellidos</label><br />
                <input type="text" id="lname" />
              </div>
            </div>
            <div className="form-wrapper">
              <div className="form-row">
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-row">
                <label htmlFor="phone">Telefono</label><br />
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
              </div>
            </div>
            <div className="form-button">
              <button type="submit" form="" value="Submit">Guardar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="back-img">
        <img src="../src/assets/img/undraw_my_current_location_om7g.svg" alt="" />
      </div>
    </div>
  )
}

export default UserAccount;