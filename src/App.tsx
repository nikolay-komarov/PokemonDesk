import React from 'react';
import cn from 'classnames';

import style from './App.module.scss';

const App = () => {
  console.log('###: same log');

  return <div className={cn(style.header, 'color')}>Yes, we Did It! This is App Component!</div>;
};

export default App;
