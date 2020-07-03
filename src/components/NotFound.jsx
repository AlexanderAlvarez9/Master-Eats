import React from 'react';
import '../assets/styles/message.scss'
import empty from '../assets/img/undraw_empty_street_sfxm.png'

const notfound = () => {
    return (
    <div className="message">
        <img className="message__image" src={empty} alt=""/>
        <h1 className="message__title" >Error 404</h1>
    </div>
    )
}

export default notfound
