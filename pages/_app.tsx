import '../styles/index.scss'
import React, { useState } from 'react'

export const LoggedIn = React.createContext<Context | undefined>(undefined);

export interface Context {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <LoggedIn.Provider value = {{ loggedIn, setLoggedIn }}>
      <Component {...pageProps} />
    </LoggedIn.Provider>
  )
}

export default MyApp
