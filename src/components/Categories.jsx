import React from 'react';
import '../assets/styles/components/Categories.scss'
import Container from '../containers/Containers';


const Categories = ({ children, title }) => (
  <Container>
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  </Container>
)

export default Categories;