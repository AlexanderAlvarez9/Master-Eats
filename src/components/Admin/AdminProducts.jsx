import React, { useContext } from 'react';
import './AdminAccount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ProductContexts, getProduct } from '../../utils/ProductContexts';

const AdminProductsItem = ({ productId }) => {
  const { products } = useContext(ProductContexts);
  const { originpath, name, price, category, cantidad } = getProduct(products, productId);

  return (
    <tr key={productId}>
      <td className="image-table"><img className="card--img" src={originpath} width="135" alt={name} /></td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{cantidad}</td>
      <td className="category-table">{category}</td>
      <td><i className="card--button" onClick={() => handleAdd(productId)}><FontAwesomeIcon className="faEdit actions" icon={faEdit} title="Edit" /></i></td>
    </tr>
  )
}


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
              ? (Object.keys(products).map((productId) => (
                <AdminProductsItem productId={productId} key={productId} />
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