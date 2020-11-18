import { useEffect, useState } from 'react';
import req from '../utils/request';

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

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<TypePokemonsData>({ total: 0, pokemons: [] }); // todo: null?
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint, query);

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
