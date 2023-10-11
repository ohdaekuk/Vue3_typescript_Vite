import 'cross-fetch/polyfill';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { persistCache } from 'apollo-cache-persist';
import { setContext } from 'apollo-link-context';

import config from '@/config';

export const APOLLO_FETCH_POLICY = {
  DEFAULT: 'cache-first',
  NETWORK_ONLY: 'network-only',
  CACHE_ONLY: 'cache-only',
  CACHE_AND_NETWORK: 'cache-and-network',
} as const;

const httpLink = new HttpLink({ uri: `${config.apiUrl}graphql` });
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  const lang = localStorage.getItem('i18n');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
      lang,
    },
  };
});
const cache = new InMemoryCache({});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first', // default
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export default client;
