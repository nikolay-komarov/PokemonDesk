import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button, { ButtonSize, ButtonColor } from '../../components/button';
import Parallax from '../../components/parallax';
import Layout from '../../components/layout';

import s from './home.module.scss';

interface HomePageProps {
  toPokedexLink: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ toPokedexLink }) => {
  const fullWidth: boolean = false;
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvatages and abilities</p>
          <Button size={ButtonSize.medium} color={ButtonColor.green} isFullWidth={fullWidth} onClick={toPokedexLink}>
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
