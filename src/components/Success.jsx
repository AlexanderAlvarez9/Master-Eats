import React from 'react';
import '../assets/styles/message.scss'
import success from '../assets/img/undraw_on_the_way_ldaq.png'


const Success = () => {
    return (
        <div className="message">
            <img className="message__image" src={success} alt=""/>
            <h1 className="message__title" >Success!!</h1>
        </div>
        )
}

export default Success
