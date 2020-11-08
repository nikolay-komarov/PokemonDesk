import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/home/index';
import PokedexPage from './pages/pokedex/index';

// import s from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/pokedex" component={PokedexPage} />
    </BrowserRouter>
  );
};

export default App;
