import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import { apolloClient } from './apollo-client'
import { Routes } from './routes';
import { theme, GlobalStyles } from './style';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
      <React.Fragment>
        <GlobalStyles theme={theme} />
        <Routes />
    </React.Fragment>
    </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
