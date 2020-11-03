import React from 'react';

const Header = () => {
  return (
    <header className="page-header">
      <nav className="main-nav">
        <a className="main-nav__logo">{/* todo: add logo
            <img src="" alt=""/>
           */}</a>
        <div className="main-nav__list-wrapper">
          <ul className="main-nav__list">
            <li className="main-nav__item main-nav__item--active">
              <a className="main-nav__item-link">Home</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__item-link">Pokédex</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__item-link">Legendaries</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__item-link">Documentation</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
