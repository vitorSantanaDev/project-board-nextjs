import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  )
}

export default App
