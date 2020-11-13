import React from 'react';
import { navigate } from 'hookrouter';

import s from './home.module.scss';

import Footer from '../../components/footer';
import Button, { ButtonSize, ButtonColor } from '../../components/button';
import Parallax from '../../components/parallax';
import Layout from '../../components/layout';

import { LinkEnum } from '../../routes';

const HomePage = () => {
  const fullWidth: boolean = false;
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div>
          <h1>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvatages and abilities</p>
          <Button
            size={ButtonSize.medium}
            color={ButtonColor.green}
            isFullWidth={fullWidth}
            onClick={() => navigate(LinkEnum.POKEDEX)}>
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
