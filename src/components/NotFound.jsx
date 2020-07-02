import React from 'react';
import '../assets/styles/NotFound.scss'
import empty from '../assets/img/undraw_empty_street_sfxm.png'

const notfound = () => {
    return (
    <div className="notfound">
        <img src={empty} alt=""/>
        <h1>Error</h1>
    </div>
    )
}

export default notfound
