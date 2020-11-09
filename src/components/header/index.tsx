import React from 'react';
import { Link } from 'react-router-dom';

import s from './header.module.scss';

import { ReactComponent as PokemonLogoSVG } from './assets/logoPokemon.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <header className={s.root}>
      <nav className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSVG />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ value, link, id }) => (
            <Link to={link} className={s.menuLink} key={id}>
              {value}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
