import React, { useState } from 'react';

import s from './pokedex.module.scss';

import Footer from '../../components/footer';
import Layout from '../../components/layout';
import PokemonCard from '../../components/pokemon-card';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';

import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: evt.target.value,
    }));
  };

  // todo: add Loader
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something wrong</div>;
  }

  // todo: add styles for input
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div>
          <h1>
            {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
          </h1>
          <div>
            <input type="text" value={searchValue} onChange={handleSearchChange} />
          </div>
          <div className={s.pokemonGallery}>
            {!isLoading &&
              data &&
              data.pokemons.map((item: PokemonsRequest) => {
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
