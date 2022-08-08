import React, { createContext, useContext, useEffect, useState } from "react";
import { Stem } from "../components/forms/add-stem-form/addStemForm";
import GigInterface from "../components/gigInterface";
import Seo from "../components/seo";
import SidePanel from "../components/sidePanel";
import SongDisplay from "../components/songDisplay";
import { readSongs } from "../utils/crud/song";
import { IsLoading, LoggedIn } from "./_app";
import ClipLoader from "react-spinners/ClipLoader";

export const DisplayedSong = createContext<Context | undefined>(undefined);

interface Context {
  songList: Song[] | undefined;
  setSongList: React.Dispatch<React.SetStateAction<Song[]>>;
  displayedSong: Song | undefined;
  setDisplayedSong: React.Dispatch<React.SetStateAction<Song>>;
}

export interface Song {
  artist: string;
  title: string;
  stems?: Stem[];
  spotifyID: string;
  spotifyKey: string;
  spotifyAlbumCover: string;
  customKey?: string;
  soundCloud?: string;
  lyrics: string;
  youtubeID: string;
  order: number;
  userNotes?: string[];
  chart?: string;
}

const Container = () => {
  const [displayedSong, setDisplayedSong] = useState(undefined);
  const [songList, setSongList] = useState([]);
  const { loggedIn } = useContext(LoggedIn);
  const { isLoading, setLoading } = useContext(IsLoading);

  useEffect(() => {
    if (loggedIn) {
      const songs = readSongs(loggedIn);
      songs.then(setSongList);
      songs
        .then((data) => setDisplayedSong(data[0]))
        .then(() => setLoading(false));
    }
  }, [loggedIn]);

  return (
    <DisplayedSong.Provider
      value={{ displayedSong, setDisplayedSong, songList, setSongList }}
    >
      <Seo page={loggedIn} />
      <div className="container">
        <div className="song-info">
          <div className="app-heading">
            <h1 style={{ fontSize: "28px" }}>Set Sharer</h1>
            {displayedSong && <GigInterface />}
          </div>

          {!isLoading ? (
            displayedSong && loggedIn ? (
              <SongDisplay />
            ) : null
          ) : (
            <div className="spinner">
              <ClipLoader />
            </div>
          )}
        </div>
        <div className="setlist">
          <SidePanel />
        </div>
      </div>
    </DisplayedSong.Provider>
  );
};

export default Container;
