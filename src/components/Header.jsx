import React from 'react';
import '../assets/styles/Header.scss'
import Categories from './Categories';


class Header extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
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
              <span className="icon">Icono</span>
              <span className="icon">Icono</span>
              <span className="icon">Icono</span>
            </div>
          </section>


          <section className="Header__categories">

            <Categories categorie={numbers} />

          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default Header;