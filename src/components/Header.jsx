import React from 'react';
import '../assets/styles/components/Header.scss'
import CategoriesMenu from './CategoriesMenu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch, faUser, faCog, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import meat from '../assets/img/categories/meat.png'
import canned from '../assets/img/categories/canned.png'
import milk from '../assets/img/categories/milk.png'
import beer from '../assets/img/categories/beer.png'
import snack from '../assets/img/categories/snack.png'
import vegetables from '../assets/img/categories/vegetables.png'

const Header = () => {
  const initalState = {
    "categories": [
      {
        id: 1,
        name: 'carne',
        img: meat
      },
      {
        id: 2,
        name: 'lacteos',
        img: milk
      },
      {
        id: 3,
        name: 'enlatados',
        img: canned
      },
      {
        id: 4,
        name: 'vegetales',
        img: vegetables
      },
      {
        id: 5,
        name: 'snack',
        img: snack
      },
      {
        id: 6,
        name: 'bebidas',
        img: beer
      }
    ]
  };

  return (
    <React.Fragment>
      <div className="Header">
        <section className="Header__brand">
          <div className="Header__brand--logo">
            {/* <img src="" alt="Logo" /> */}
            <Link to="/">
              <FontAwesomeIcon className="faShoppingBag" icon={faShoppingBag} />
            </Link>
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
            <Link className="icon" to="/CartMain">
              <FontAwesomeIcon className="faShoppingCart" icon={faShoppingCart} />
            </Link>
            <span className="icon">
              <FontAwesomeIcon className="faCog" icon={faCog} />
            </span>
          </div>
        </section>

        <section className="Header__categories">

          {initalState.categories.map(item =>
            <CategoriesMenu key={item.id} categorie={item.name} srcImage={item.img} />
          )}

        </section>
      </div>
    </React.Fragment>
  )
}
export default Header;