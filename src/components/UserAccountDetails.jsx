import React from 'react';
import '../assets/styles/components/UserAccount.scss';

const UserAccountDetails = ()=>{
  return(
      <div className="UserAccount__container__menu-settings">
        {/* <h1>Hello from user details</h1> */}
        <h2>Mi cuenta</h2>
        <form action="">
          <div className="form-wrapper">
            <div className="form-row">
              <label for="pname">Nombre</label><br />
              <input type="text" id="pname" />
            </div>
            <div className="form-row">
              <label for="lname">Apellidos</label><br />
              <input type="text" id="lname" />
            </div>
          </div>
          <div className="form-wrapper">
            <div className="form-row">
              <label for="email">Email</label><br />
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-row">
              <label for="phone">Telefono</label><br />
              <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div>
          </div>
          <div className="form-button">
            <button type="submit" form="" value="Submit">Guardar</button>
          </div>
        </form>
      </div>
  )
}

export default UserAccountDetails;