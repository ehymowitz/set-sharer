import '../styles/index.scss'
import React, { useState, createContext } from 'react'

export const LoggedIn = createContext<Context | undefined>(undefined);

export interface Context {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <LoggedIn.Provider value = {{ loggedIn, setLoggedIn }}>
      <Component {...pageProps} />
    </LoggedIn.Provider>
  )
}

export default MyApp
