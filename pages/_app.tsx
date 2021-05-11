import React from 'react';
import '../styles/globals.css'
import Page from '../components/Page';
import { AuthProvider } from '../lib/utils/auth.js'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Page backgroundColor={pageProps?.backgroundColor}>
        <Component {...pageProps} />
      </Page>
    </AuthProvider>
  )
}

export default MyApp;