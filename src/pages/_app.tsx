import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'

import { SessionProvider } from 'next-auth/react'

import GlobalStyles from '../styles/globalStyles'

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
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
