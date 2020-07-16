import React from 'react';
import '../assets/styles/containers/Container.scss';

function Containers(props) {
  return <div className="container">{props.children}</div>;
}

export default Containers;
