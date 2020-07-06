import React from 'react';
import '../assets/styles/components/Header.scss'
import CategoriesMenu from './CategoriesMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch, faUser, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const categories = ['carne', 'lacteos', 'enlatados', 'vegetales', 'snacks'];

  return (
    <React.Fragment>
      <div className="Header">
        <section className="Header__brand">
          <div className="Header__brand--logo">
            {/* <img src="" alt="Logo" /> */}
            <FontAwesomeIcon className="faShoppingBag" icon={faShoppingBag} />
            <span className="Header__title">MasterEats</span>
          </div>
          <div className="Header__brand--search">
            <FontAwesomeIcon className="faSearch" icon={faSearch} />
            <input className="" type="text" name="search" id="search" placeholder={'Encuentra tu Producto'} />
          </div>
          <div className="Header__brand--icons">
            <span className="icon">
              <FontAwesomeIcon className="faUser" icon={faUser} />
            </span>
            <span className="icon">
              <FontAwesomeIcon className="faShoppingCart" icon={faShoppingCart} />
            </span>
            <span className="icon">
              <FontAwesomeIcon className="faCog" icon={faCog} />
            </span>
          </div>
        </section>

        <section className="Header__categories">

          {categories.map(item =>
            <CategoriesMenu key={item} categorie={item} />
          )}

        </section>
      </div>
    </React.Fragment>
  )
}
export default Header;