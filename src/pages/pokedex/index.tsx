import React from 'react';

import s from './pokedex.module.scss';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemon-card';

// import pokemons from '../../mock/pokemons.json';
// eslint-disable-next-line import/extensions
import pokemons from '../../mock/pokemons.js';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div>
          <h1>800 Pokemons for you to choose your favorite</h1>
          <div className={s.pokemonGallery}>
            {pokemons.map((item) => {
              return (
                <div className={s.pokemonCardPreview}>
                  <PokemonCard
                  // stats={item.stats}
                  // types={item.types}
                  // img={item.img}
                  // name={item.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
