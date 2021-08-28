import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: cookies?.user ? cookies?.user : headers.Authorization,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
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
