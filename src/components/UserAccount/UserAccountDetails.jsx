import React from 'react';
import './UserAccount.scss';
import { Link } from 'react-router-dom';

const UserAccountDetails = () => {
  return (
    <div className="UserAccount__container__menu-settings">
      <h2>Mi cuenta</h2>
      <form action="">
        <div className="form-wrapper">
          <div className="form-row">
            <label htmlFor="name">Nombre</label><br />
            <input type="text" id="name" placeholder="Juan Carlos" ></input>
          </div>
          <div className="form-row">
            <label htmlFor="lname">Apellidos</label><br />
            <input type="text" id="lname" placeholder="Martinez Barajas" ></input>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form-row">
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" name="email" placeholder="carlos4587@gmail.com" ></input>
          </div>
          <div className="form-row">
            <label htmlFor="phone">Telefono</label><br />
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="3203889058" ></input>
          </div>
        </div>
        <div className="form-button">
          <Link to="/success"><button type="submit" form="" value="Submit">Guardar</button></Link>
        </div>
      </form>
    </div>
  )
}

export default UserAccountDetails;
