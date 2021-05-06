// import { ApolloProvider } from '@apollo/client';
// import '../styles/globals.css'
// import Page from 'components/Page';
// import withData from '../lib/utils/withData'

// function MyApp({ Component, pageProps, err, apollo }) {
//   console.log(apollo);
  
//   return (
//     <ApolloProvider client={apollo}>
//       <Page backgroundColor={pageProps?.backgroundColor}>
//         <Component err={err} {...pageProps} />
//       </Page>
//     </ApolloProvider>

//   )
// }

// MyApp.getInitialProps = async function ({ Component, ctx }) {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   pageProps.query = ctx.query;
//   return { pageProps };
// };

// export default withData(MyApp)

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