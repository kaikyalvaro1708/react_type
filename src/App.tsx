import React from 'react';

import { Routes } from './routes';
import { UserLoggedContextProvider } from './shared/contexts/UserLogged';

export const App = () => {
  return (
    <UserLoggedContextProvider>
      <Routes />
    </UserLoggedContextProvider>
  );
}
