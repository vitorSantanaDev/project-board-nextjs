import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

import { SessionProvider } from 'next-auth/react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import GlobalStyles from '../styles/globalStyles'

const initialOptions = {
  'client-id':
    'ASP2IdiIqnTh3gZUrCdiYZUn3_C0D6E8CQ1kZfw8k7pDx08Spps6Z2a5k7ZUrIfaqpXKz5_eFUSjZ0gD',
  currency: 'BRL',
  intent: 'capture'
}

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Project Board | Next.js</title>
        <link rel="shortcut icon" href="/images/icon-board.png" />
        <link rel="apple-touch-icon" href="/images/icon-board.png" />
        <meta
          name="description"
          content="A simple Board project with Next.js"
        />
      </Head>
      <PayPalScriptProvider options={initialOptions}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </SessionProvider>
  )
}

export default App
