// todo: сделать полный набор полей для TypePokemons
export type TypePokemons = {
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  types: {
    type: string;
  }[];
  img: string;
};

export interface IPokemons {
  total: number;
  pokemons: TypePokemons[];
}
