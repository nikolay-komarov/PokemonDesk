import React from 'react';
// import Heading from "../Heading";

import s from './pokemon-card.module.scss';

// interface PokemonCardProps {
//   name: string,
//   stats: {
//     atack: number,
//     defense: number,
//   },
//   types: {
//     type: string,
//   }[],
//   img: string,
// };

const PokemonCard = () =>
  // {
  //   stats,
  //   types,
  //   img,
  //   name
  // }
  {
    return (
      <div className={s.root}>
        <div className={s.infoWrap}>
          {/* todo: add Heading */}
          {/* <Heading size='xs' className={s.titleName}>
          Charmander
        </Heading> */}
          <h6>Charmander</h6>
          <div className={s.statWrap}>
            <div className={s.statItem}>
              <div className={s.statValue}>52</div>
              Attack
            </div>
            <div className={s.statItem}>
              <div className={s.statValue}>43</div>
              Defense
            </div>
          </div>
          <div className={s.labelWrap}>
            <span className={s.label}>Fire</span>
          </div>
        </div>
        <div className={s.pictureWrap}>
          {/* <img src={img} alt={name} /> */}
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
            alt="Charmander"
          />
        </div>
      </div>
    );
  };

export default PokemonCard;
