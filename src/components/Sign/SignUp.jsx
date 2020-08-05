import React from 'react';
import SignUpImage from '../../assets/static/img-3.jpg';

const SignUp = (props) => {
  return (
    <div className="user signupBx">
      <div className="formBx">
        <form action="">
          <h2>Crea una cuenta</h2>
          <input type="text" name="user" placeholder="Usuario" />
          <input type="email" name="email" placeholder="Correo" />
          <input type="password" name="password" placeholder="Contraseña" />
          <input type="password" name="password2" placeholder="Confirma tu contraseña" />
          <input type="submit" name="signup" value="Registrarse" />
          <p className="signup">¿Ya tienes una cuenta? <a href="#" onClick={props.toggleFormSignUP}>Iniciar sesión</a>.</p>
        </form>
      </div>
      <div className="imgBx">
        <img src={SignUpImage} alt="" />
      </div>
    </div>
  )
}

export default SignUp;