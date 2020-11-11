import '../styles/index.scss'
import React, { useState, createContext, useEffect } from 'react'
import { getQueryStringValue } from '../utils/queryString'
import type { AppProps } from 'next/app'

export const LoggedIn = createContext<Context | undefined>(undefined);

interface Context {
  loggedIn: string;
  setLoggedIn: React.Dispatch<React.SetStateAction<string>>;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState("")

  useEffect(() => {
    if (getQueryStringValue("set")) {
      setLoggedIn(getQueryStringValue("set"))
    }
  }, [])

  return (
    <LoggedIn.Provider value = {{ loggedIn, setLoggedIn }}>
      <Component {...pageProps} />
    </LoggedIn.Provider>
  )
}

export default MyApp
