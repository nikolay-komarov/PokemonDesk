import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../components/layout';

import s from './pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div>
          <h1>800 Pokemons for you to choose your favorite</h1>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
