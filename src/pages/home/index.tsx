import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/button';
import Parallax from '../../components/parallax';
import Layout from '../../components/layout';

import s from './home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvatages and abilities</p>
          <Button
            // eslint-disable-next-line no-console
            onClick={() => console.log('button click!')}>
            See pokemons
          </Button>
        </div>
        <div>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
