import React from 'react';
// import Heading from "../Heading";

import s from './pokemon-card.module.scss';

interface PokemonCardProps {
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  types: {
    type: string;
  }[];
  img: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ stats, types, img, name }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        {/* todo: add Heading */}
        {/* <Heading size='xs' className={s.titleName}>
          Charmander
        </Heading> */}
        <h6>{name}</h6>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{types[0].type}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
