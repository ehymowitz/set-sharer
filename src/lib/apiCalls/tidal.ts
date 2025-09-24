import { cookieIsNotSet, getCookie, setCookie } from "./cookies";

type TidalClientCredentials = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

const getTidalCredential = async () => {
  if (!(await cookieIsNotSet("tidal"))) return;
  const clientId = process.env.TIDAL_CLIENT_ID;
  const clientSecret = process.env.TIDAL_SECRET;

  const base64Credentials = btoa(clientId + ":" + clientSecret);

  const authOptions = {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64Credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  };

  try {
    const response = await fetch(
      "https://auth.tidal.com/v1/oauth2/token",
      authOptions
    );

    if (response.ok) {
      const data: TidalClientCredentials = await response.json();
      await setCookie("tidal", {
        value: data?.access_token,
        expires_in: data?.expires_in,
      });
      return getCookie("tidal");
    } else {
      throw new Error("Failed to authenticate");
    }
  } catch (error) {
    console.error(error);
  }
};

const searchTidalId = async (
  cookie: string,
  search: string
): Promise<string | undefined> => {
  const authOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await fetch(
      `https://openapi.tidal.com/v2/searchResults/${search}?countryCode=US&explicitFilter=include%2C%20exclude&include=tracks`,
      authOptions
    );

    if (response.ok) {
      const data = await response.json();
      console.log(JSON.stringify(data, undefined, 2));
      return data.id;
    } else {
      throw new Error("Failed to authenticate");
    }
  } catch (error) {
    console.error(error);
  }
};

const getSongInfoFromId = async (cookie: string, id: string) => {
  const authOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await fetch(
      `https://openapi.tidal.com/v2/tracks/${id}?countryCode=US`,
      authOptions
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to authenticate");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTidalSongInfo = async (search: string) => {
  let tidalCookie = await getCookie("tidal");

  console.log("cookie", tidalCookie);
  if (!tidalCookie) {
    tidalCookie = await getTidalCredential();
  }

  if (!tidalCookie) return Error("Problem with cookie");
  const id = await searchTidalId(tidalCookie, search);

  if (!id) return Error("no id");
  const songInfo = getSongInfoFromId(tidalCookie, id);

  return songInfo;
};
