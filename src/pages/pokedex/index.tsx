import React, { useEffect, useState } from 'react';

import s from './pokedex.module.scss';

import Footer from '../../components/footer';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemon-card';

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

type TypePokemons = {
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  types: string;
  img: string;
};

type TypePokemonsData = {
  total: number;
  pokemons: TypePokemons[];
};

const usePokemons = () => {
  const [data, setData] = useState<TypePokemonsData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        // todo: вынести url с параметрами в конфиг
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=10');
        const result = await response.json();

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong</div>;
  }

  const pokemonsList = data.pokemons.map((item: any) => normalizePokedata(item));

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div>
          <h1>
            {data.total} <b>Pokemons</b> for you to choose your favorite
          </h1>
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
