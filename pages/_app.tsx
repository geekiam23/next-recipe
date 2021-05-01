import '../styles/globals.css'
import Page from '../components/Page';

function MyApp({ Component, pageProps, err }) {
  return (
    <Page backgroundColor={pageProps?.backgroundColor}>
      <Component err={err} {...pageProps} />
    </Page>
  )
}

export default MyApp
