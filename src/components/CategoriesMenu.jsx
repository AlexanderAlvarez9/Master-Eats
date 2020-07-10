import React from 'react';

class CategoriesMenu extends React.Component {

  // state = {};

  filterCategory() {
    alert(`Filtrar ${this.props.categorie}`)
  }

  render() {
    return (
      <span onClick={this.filterCategory} className={`categorie ${this.props.categorie}`}>
        <img src={this.props.srcImage} alt="Icono Categoria" />
        {this.props.categorie}
      </span>
    )
  }
}

export default CategoriesMenu;