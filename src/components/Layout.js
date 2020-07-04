import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;