import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import s from './header.module.scss';

import { GENERAL_MENU } from '../../routes';
import { ReactComponent as PokemonLogoSVG } from './assets/logoPokemon.svg';

const Header = () => {
  const path = usePath();

  return (
    <header className={s.root}>
      <nav className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSVG />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A key={title} href={link} className={cn(s.menuLink, { [s.activeLink]: link === path })}>
              {title}
            </A>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
