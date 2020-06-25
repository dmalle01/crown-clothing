import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Homepage} />
        <Route  path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
