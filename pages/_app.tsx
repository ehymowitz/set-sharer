import type { AppProps } from "next/app";
import React, { createContext, useEffect, useState } from "react";
import "../styles/index.scss";
import { getQueryStringValue } from "../utils/queryString";

export const LoggedIn = createContext<LoggedInContext | undefined>(undefined);

export const IsLoading = createContext<LoadingContext | undefined>(undefined);
({});

interface LoggedInContext {
  loggedIn: string;
  setLoggedIn: React.Dispatch<React.SetStateAction<string>>;
}

interface LoadingContext {
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (getQueryStringValue("set")) {
      setLoggedIn(getQueryStringValue("set"));
    }
  }, []);

  return (
    <IsLoading.Provider value={{ isLoading, setLoading }}>
      <LoggedIn.Provider value={{ loggedIn, setLoggedIn }}>
        <Component {...pageProps} />
      </LoggedIn.Provider>
    </IsLoading.Provider>
  );
}

export default MyApp;
