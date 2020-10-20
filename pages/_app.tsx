import '../styles/index.scss'
import React, { useState, createContext } from 'react'

export const LoggedIn = createContext<Context | undefined>(undefined);

export interface Context {
  loggedIn: string;
  setLoggedIn: React.Dispatch<React.SetStateAction<string>>;
}

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  // look for local storage string here, add as value to loggedIn if it exists
  // otherwise pass empty string
  const [loggedIn, setLoggedIn] = useState<string>("")

  return (
    <LoggedIn.Provider value = {{ loggedIn, setLoggedIn }}>
      <Component {...pageProps} />
    </LoggedIn.Provider>
  )
}

export default MyApp
