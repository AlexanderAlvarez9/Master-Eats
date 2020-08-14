import React, { useState } from 'react';
import SignUpImage from '../../assets/static/img-3.jpg';
import { useFirebaseApp, useUser } from 'reactfire';
import { Link, useHistory } from 'react-router-dom';

const SignUp = (props) => {

  let history = useHistory();
  const [values, setValues] = useState('')
  const firebase = useFirebaseApp();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const getUsers = async () => {
    await firebase.auth()
  }

  const handleSingUp = async () => {
    await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
    history.push("/");
  }

  const handlelogout = async () => {
    await firebase.auth().signOut();
  }

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleSubmit = e => {
    event.preventDefault();
  }

  return (
    <div className='user signupBx'>
      <div className='formBx'>
        <form action='' onSubmit={handleSubmit}>
          <h2>Crea una cuenta</h2>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Ingrese su correo"
            onChange={handleInputChange}
            aria-label='Usuario'
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Ingrese su Contraseña"
            onChange={handleInputChange}
            aria-label='Contraseña'
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Ingrese su Contraseña"
            aria-label='Confirmar contraseña'
          />
          <input
            type='submit'
            name='signup'
            value='Registrarse'
            onClick={handleSingUp}
            aria-label='Botón registrarse'
          />
        </form>
      </div>
      <div className='imgBx'>
        <img src={SignUpImage} alt='Imagen inicio de sesión' />
      </div>
    </div>
  );
};

export default SignUp;