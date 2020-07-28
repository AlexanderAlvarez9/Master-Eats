import React from 'react';
import '../assets/styles/components/UserAccount.scss';

const UserAccountOrders = () => {
  return (
    <div className="UserAccount__container__menu-settings">
      <div className="order">
        <h2 className="title">Mis Ordenes Recientes</h2>

        <p>
          <span className="orderid">Pedido #</span> <b>54124</b><br />
          <span>Cantidad de Productos: <b>14</b> </span>
        </p>

        <p>
          <span>Fecha: <b>14/70/2020</b> </span><br />
          <span>Costo Total: <b>$150.000</b></span>
        </p>
      </div>
      <div className="order">
        <p>
          <span className="orderid">Pedido #</span> <b>53148</b><br />
          <span>Cantidad de Productos: <b>10</b> </span>
        </p>

        <p>
          <span>Fecha: <b>10/70/2020</b> </span><br />
          <span>Costo Total: <b>$100.000</b></span>
        </p>
      </div>
    </div>
  )
}

export default UserAccountOrders;