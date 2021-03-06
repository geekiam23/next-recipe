import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

import Page from '../components/Page';
import { AuthProvider } from '../lib/utils/auth.js';
import { useCookies } from 'react-cookie';
import '../styles/globals.css';

interface Props {
  Component: typeof React.Component;
  pageProps: {
    backgroundColor: string;
  };
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const [cookies] = useCookies(['user']);

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    // @ts-expect-error
    cache: new InMemoryCache({
      fragmentMatcher: new IntrospectionFragmentMatcher({
        introspectionQueryResultData: {
          __schema: {
            types: [],
          },
        },
      }),
    }),
    request: (operation: {
      setContext: (arg0: { headers: { authorization: string } }) => void;
    }) => {
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
