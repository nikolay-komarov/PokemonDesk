import React from 'react';
import { useRoutes } from 'hookrouter';

import NotFoundPage from './pages/not-found';

import routes from './routes';

const App = () => {
  const match = useRoutes(routes);

  return match || <NotFoundPage />;
};

export default App;
