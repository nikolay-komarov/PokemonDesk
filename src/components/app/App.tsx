import React from 'react';
import cn from 'classnames';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import s from './App.module.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className={cn(s.content, 'color')}>content</div>
      <Footer />
    </>
  );
};

export default App;
