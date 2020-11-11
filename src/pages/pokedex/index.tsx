import React from 'react';

import s from './pokedex.module.scss';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemon-card';

import pokemons from '../../mock/pokemons.json';

// todo: move to utils
const normalizePokedata = (pokemons: any) =>
  Object.keys(pokemons).length
    ? {
        name: pokemons.name,
        stats: {
          attack: pokemons.stats.attack,
          defense: pokemons.stats.defense,
        },
        types: pokemons.types,
        img: pokemons.img,
      }
    : {};

const PokedexPage = () => {
  const pokemonsList = pokemons.map((item: any) => normalizePokedata(item));

  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div>
          <h1>800 Pokemons for you to choose your favorite</h1>
          <div className={s.pokemonGallery}>
            {pokemonsList.map((item: any) => {
              return (
                <div className={s.pokemonCardPreview} key={item.name}>
                  <PokemonCard stats={item.stats} types={item.types} img={item.img} name={item.name} />
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
