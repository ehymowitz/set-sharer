import '../styles/index.scss'
import React, { useState, createContext, useEffect } from 'react'

export const LoggedIn = createContext<Context | undefined>(undefined);

export interface Context {
  loggedIn: string;
  setLoggedIn: React.Dispatch<React.SetStateAction<string>>;
}

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  const [loggedIn, setLoggedIn] = useState<string>("")

  useEffect(() => {
    if (sessionStorage.getItem('setSharerSet')) {
      setLoggedIn(sessionStorage.getItem('setSharerSet'))
    }
  }, [])

  return (
    <LoggedIn.Provider value = {{ loggedIn, setLoggedIn }}>
      <Component {...pageProps} />
    </LoggedIn.Provider>
  )
}

export default MyApp
