import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Homepage} />
        <Route  path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
