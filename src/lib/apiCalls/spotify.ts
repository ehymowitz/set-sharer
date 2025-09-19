import { cookieIsNotSet, getCookie, setCookie } from "./cookies";

type SpotifyClientCredentials = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export const getSpotifyCredential = async () => {
  if (!(await cookieIsNotSet("spotify"))) return;

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

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
      "https://accounts.spotify.com/api/token",
      authOptions
    );

    if (response.ok) {
      const data: SpotifyClientCredentials = await response.json();
      await setCookie("spotify", {
        value: data?.access_token,
        expires_in: data?.expires_in,
      });
      return getCookie("spotify");
    } else {
      throw new Error("Failed to authenticate");
    }
  } catch (error) {
    console.error(error);
  }
};

const searchSpotifyId = async (cookie: string): Promise<string | undefined> => {
  const authOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&limit=1&offset=0",
      authOptions
    );

    console.log(response);

    if (response.ok) {
      const data: SpotifyApi.TrackSearchResponse = await response.json();
      return data.tracks.items[0].id;
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
      `https://api.spotify.com/v1/audio-features/${id}`,
      authOptions
    );

    console.log(response);

    if (response.ok) {
      const data: SpotifyApi.AudioFeaturesObject = await response.json();
      return data;
    } else {
      throw new Error("Failed to authenticate");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getSpotifySongInfo = async () => {
  let spotifyCookie = await getCookie("spotify");
  if (!spotifyCookie) {
    spotifyCookie = await getSpotifyCredential();
  }

  console.log("cookie1", spotifyCookie);
  if (!spotifyCookie) return Error("Problem with cookie");
  const id = await searchSpotifyId(spotifyCookie);

  console.log("cookie2", spotifyCookie);
  if (!id) return Error("no id");
  const songInfo = getSongInfoFromId(spotifyCookie, id);

  return songInfo;
};
