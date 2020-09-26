import React from 'react';
import '../assets/styles/components/Message.scss';
import success from '../assets/img/success.png';

const Success = () => {
  return (
    <div className='message'>
      <img className='message__image' src={success} alt='' />
      <h1 className='message__title'>Tu comida esta en camino!</h1>
    </div>
  );
};

export default Success;
