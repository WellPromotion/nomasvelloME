import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://app-okuneva.jjjwv99uog-58e601yzv4d7.p.temp-site.link/graphql',
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  },
});


export default client; 