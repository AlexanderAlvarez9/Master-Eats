import React from 'react';
import '../assets/styles/components/Header.scss'
import CategoriesMenu from './CategoriesMenu';



const Header = () => {
  const categories = ['carne', 'lacteos', 'enlatados', 'vegetales', 'snacks'];

  return (
    <React.Fragment>
      <div className="Header">
        <section className="Header__brand">
          <div className="Header__brand--logo">
            <img src="" alt="Logo" />
            <span className="Header__title">Slogan</span>
          </div>
          <input className="Header__brand--search" type="text" name="search" id="search" placeholder="Encuentra tu Producto" />
          <div className="Header__brand--icons">
            <span className="icon">Usuario</span>
            <span className="icon">Carrito</span>
            <span className="icon">Salir</span>
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