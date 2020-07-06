import React from 'react';
import SignInImage from '../assets/static/img-1.jpg';

const SignIn = (props) => {
    return (
        <div className="user signinBx">
            <div className="imgBx">
                <img src={SignInImage} alt=""/>
            </div>
            <div className="formBx">
                <form action="" id="form" className="form-control">
                    <h2>Inicia sesión</h2>
                    <div>
                        <input type="text" name="" placeholder="Usuario" id="username"/>
                        <small></small>
                    </div>
                    
                    <div>
                        <input type="password" name="" placeholder="Contraseña" id="password"/>
                        <small></small>
                    </div>
                    <input type="submit" name="" value="Iniciar sesión"/>
                    <p className="signup">¿No tienes una cuenta? <a href="#" onClick={props.toggleFormSignIn}>Regístrate</a>.</p>
                </form>
            </div>
        </div>
    )
}

export default SignIn;