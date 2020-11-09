import React from 'react';

import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.wrap}>
        <span className={s.makeWith}>
          Make with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </span>
        <a className={s.teamLink} href="/">
          Ours Team
        </a>
      </div>
    </footer>
  );
};

export default Footer;
