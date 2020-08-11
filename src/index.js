import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

ReactDOM.render(
  <Suspense fallback={'Conectando a la App'}>
    <App />
  </Suspense>, document.getElementById('app'));
