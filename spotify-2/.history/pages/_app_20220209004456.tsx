import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, } }: AppProps) {
  return (
    <SessionProvider session={}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
