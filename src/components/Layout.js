import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
