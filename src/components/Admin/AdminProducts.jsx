import React, { useContext } from 'react';
import './AdminAccount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ProductContexts } from '../../utils/ProductContexts';

const AdminProducts = () => {
  const { products } = useContext(ProductContexts);

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
            <td className="category-table">Categoria</td>
            <td>Editar</td>
          </tr>
        </thead>
        <tbody>

          {
            products !== undefined
              ? (products.map((item) => (
                <tr key={item._id}>
                  <td className="image-table"><img className="card--img" src={item.originpath} width="135" alt={item.name} /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.cantidad}</td>
                  <td className="category-table">{item.category}</td>
                  <td><i className="card--button" onClick={() => handleAdd(item._id)}><FontAwesomeIcon className="faEdit actions" icon={faEdit} title="Edit" /></i></td>
                </tr>
              )))
              : <h1>Sin productos</h1>
          }
        </tbody>
      </table>

      <button className="AdminAccount__button" type="submit" form="" value="Submit">Nuevo</button>
    </div>
  )
}

export default AdminProducts;