import React from 'react';
import { CookiesProvider } from "react-cookie"
import { ApolloProvider, ApolloClient } from '@apollo/client'
import {
  InMemoryCache,
} from 'apollo-cache-inmemory'

import Page from '../components/Page';
import { AuthProvider, useAuth } from '../lib/utils/auth.js'
import { useCookies } from "react-cookie"
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  const [cookies] = useCookies(["user"]);

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
    request: (operation) => {
      const token = localStorage.getItem('token');
  
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
  )
}

export default MyApp;