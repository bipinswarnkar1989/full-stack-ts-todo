import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { apolloClient } from './apollo-client'
import { Routes } from './routes';

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <React.Fragment>
        <Routes />
    </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
