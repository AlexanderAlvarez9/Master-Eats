import React from 'react';
import '../assets/styles/components/Message.scss';
import empty from '../assets/img/NotFound.png';

const NotFound = () => {
  return (
    <div className='message'>
      <img className='message__image' src={empty} alt='' />
      <h1 className='message__title'>Error 404</h1>
    </div>
  );
};

export default NotFound;
