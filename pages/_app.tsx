import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Page from '../components/Page';
import { AuthProvider } from '../lib/utils/auth.js';
import { useCookies } from 'react-cookie';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [cookies] = useCookies(['user']);

  const client = new ApolloClient({
    uri: `https://foodielarry-api.herokuapp.com/graphql`,
    cache: new InMemoryCache(),
    request: operation => {
      if (cookies?.user?.token) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${cookies?.token}`,
          },
        });
      }
    },
  });

  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <AuthProvider>
          <Page backgroundColor={pageProps?.backgroundColor}>
            <Component {...pageProps} />
          </Page>
        </AuthProvider>
      </CookiesProvider>
    </ApolloProvider>
  );
};

export default MyApp;
