import React from 'react';
import SignIn from '../components/Sign/SignIn';
import SignUp from '../components/Sign/SignUp';

import '../components/Sign/Form.scss';
class Form extends React.Component {
  MoveForm() {
    let container = document.querySelector('.container');
    container.classList.toggle('active')
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <SignIn
            toggleFormSignIn={this.MoveForm}
          />
          <SignUp
            toggleFormSignUp={this.MoveForm}
          />
        </div>
      </section>
    )
  }
}


export default Form;
