import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import '../styles/globals.css'
import Page from '../components/Page';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Page backgroundColor={pageProps?.backgroundColor}>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

export default MyApp;