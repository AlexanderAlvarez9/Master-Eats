import React, { useState } from 'react';
import SignInImage from '../../assets/static/img-1.jpg';
import { useFirebaseApp, useUser } from 'reactfire';
import { useHistory } from 'react-router-dom';


const SignIn = (props) => {

  let history = useHistory();
  const [values, setValues] = useState('')
  const [profile, setProfile] = useState(0);
  const firebase = useFirebaseApp();
  let user = useUser();

  // console.log(user.email);

  const userValues = {
    email: '',
    password: '',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const getUsers = async () => {
    await firebase.auth()
  }

  const handleSingUp = async () => {
    await firebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        ...userValues, email: cred.user.email
      })
    })
  }

  const handlelogout = async () => {
    await firebase.auth().signOut();
  }

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
      history.push("/");
    } catch (error) {
      alert(error.message)
    }
  }

  const tests = async () => {
    firebase.auth().currentUser.updateProfile({
      displayName: "Jane Q. User",
      photoURL: "Administrador"
    })
    console.log(profile);

  }

  const handleSubmit = e => {
    event.preventDefault();
  }

  return (
    <div className='user signinBx'>
      <div className='imgBx'>
        <img src={SignInImage} alt='Imagen inicio de sesión' />
      </div>
      <div className='formBx'>
        <form id='form' className='form-control' onSubmit={handleSubmit}>
          <h2>Inicia sesión</h2>
          <div>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Ingrese su correo"
              onChange=""
              onChange={handleInputChange}
            />
            <small />
          </div>

          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingrese su Contraseña"
              onChange={handleInputChange}
            />
            <small />
          </div>
          <input type='submit' name='' value='Iniciar sesión' aria-label='Botón iniciar sesión' onClick={handleSignIn} />
          <p className='signup'>
            ¿No tienes una cuenta?
            <a aria-label='Registrarse' href='#' onClick={props.toggleFormSignIn}>Regístrate</a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
