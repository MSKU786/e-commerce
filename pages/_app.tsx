import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import basketSlice from '../slice/basketSlice'
import { createStore } from '@reduxjs/toolkit'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const store = createStore(basketSlice)
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
