import React from 'react';
import './AdminAccount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const AdminProducts = () => {
  return (
    <div className="AdminAccount__container__menu-settings">
      <div className="AdminAccount__header">
        <h2 className="h2">Productos</h2>
        <input type="text" placeholder="Filtrar Productos" />
      </div>

      <table>
        <thead>
          <tr>
            <td>Imagen</td>
            <td>Description</td>
            <td>Costo</td>
            <td>Existencias</td>
            <td>Categoria</td>
            <td>Editar</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cerveza</td>
            <td>Cerveza Botella</td>
            <td>12000</td>
            <td>10</td>
            <td>Bebidas</td>
            <td><FontAwesomeIcon className="faEdit actions" icon={faEdit} title="Edit" /></td>
          </tr>
          <tr>
            <td>Cerveza</td>
            <td>Cerveza Botella</td>
            <td>12000</td>
            <td>10</td>
            <td>Bebidas</td>
            <td><FontAwesomeIcon className="faEdit actions" icon={faEdit} title="Edit" /></td>
          </tr>
          <tr>
            <td>Cerveza</td>
            <td>Cerveza Botella</td>
            <td>12000</td>
            <td>10</td>
            <td>Bebidas</td>
            <td><FontAwesomeIcon className="faEdit actions" icon={faEdit} title="Edit" /></td>
          </tr>
          <tr>
            <td>Cerveza</td>
            <td>Cerveza Botella</td>
            <td>12000</td>
            <td>10</td>
            <td>Bebidas</td>
            <td><FontAwesomeIcon className="faEdit actions" icon={faEdit} title="Edit" /></td>
          </tr>
          <tr>
            <td>Cerveza</td>
            <td>Cerveza Botella</td>
            <td>12000</td>
            <td>10</td>
            <td>Bebidas</td>
            <td><FontAwesomeIcon className="faEdit actions" icon={faEdit} title="Edit" /></td>
          </tr>
          <tr>
            <td>Cerveza</td>
            <td>Cerveza Botella</td>
            <td>12000</td>
            <td>10</td>
            <td>Bebidas</td>
            <td><FontAwesomeIcon className="faEdit actions" icon={faEdit} title="Edit" /></td>
          </tr>
        </tbody>
      </table>

      <button className="AdminAccount__button" type="submit" form="" value="Submit">Nuevo</button>
    </div>
  )
}

export default AdminProducts;