import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import s from './home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div>content</div>
      <Footer />
    </div>
  );
};

export default HomePage;
