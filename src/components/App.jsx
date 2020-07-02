import React from 'react';

import Layout from './Layout'
import HelloWorld from './HelloWorld';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <HelloWorld />
      </Layout>
    </React.Fragment>
  )
}

export default App;