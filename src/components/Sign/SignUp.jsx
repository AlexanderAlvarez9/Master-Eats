import React from 'react';
import SignUpImage from '../../assets/static/img-3.jpg';

const SignUp = (props) => {
  return (
    <div className='user signupBx'>
      <div className='formBx'>
        <form action=''>
          <h2>Crea una cuenta</h2>
          <input type='text' name='' placeholder='Usuario' aria-label='Usuario' />
          <input type='email' name='' placeholder='Correo' aria-label='Correo electrónico' />
          <input type='password' name='' placeholder='Contraseña' aria-label='Contraseña' />
          <input type='password' name='' placeholder='Confirma tu contraseña' aria-label='Confirmar contraseña' />
          <input type='submit' name='signup' value='Registrarse' aria-label='Botón registrarse' />
          <p className='signup'>
            ¿Ya tienes una cuenta?
            <a aria-label='Iniciar sesión' href='#' onClick={props.toggleFormSignUP}> Iniciar sesión</a>
            .
          </p>
        </form>
      </div>
      <div className='imgBx'>
        <img src={SignUpImage} alt='Imagen inicio de sesión' />
      </div>
    </div>
  );
};

export default SignUp;