import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include'
  },
  cache,
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log(graphQLErrors);
    }
    if (networkError) {
      console.log(networkError);
    }
  }
});