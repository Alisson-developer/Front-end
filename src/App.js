import React from 'react';
import './App.css';

import Routes from './routes'

function App() {

  return (
    <div className="fundo">
      <div className="App">
        <div className="container">

          <div className="content">
            <Routes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
