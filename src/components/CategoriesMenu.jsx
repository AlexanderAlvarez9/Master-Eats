import React from 'react';

const CategoriesMenu = ({ categorie, srcImage }) => {

  return (
    <span className={`icon ${categorie}`}>
      <img src={srcImage} alt="catImg" />
      {categorie}
    </span>
  )
}

export default CategoriesMenu;