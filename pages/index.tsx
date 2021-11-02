import React, { createContext, useContext, useState, useEffect } from "react";
import { LoggedIn } from "./_app";
import { readSongs } from "../utils/crud";
import SidePanel from "../components/sidePanel";
import SongDisplay from "../components/songDisplay";
import Seo from "../components/seo";
import GigInterface from "../components/gigInterface";

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
  notes: Notes;
}

interface Notes {
  spotifyID: string;
  spotifyKey: string;
  spotifyAlbumCover: string;
  customKey?: string;
  soundCloud?: string;
  lyrics: string;
  youtubeID: string;
  order: number;
  userNotes: string[];
  chart: string;
}

const Container = () => {
  const [displayedSong, setDisplayedSong] = useState(undefined);
  const [songList, setSongList] = useState([]);
  const { loggedIn } = useContext(LoggedIn);

  useEffect(() => {
    if (loggedIn) {
      const songs = readSongs(loggedIn);
      songs.then(setSongList);
      songs.then((data) => setDisplayedSong(data[0]));
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

          <SongDisplay />
        </div>
        <div className="setlist">
          <SidePanel />
        </div>
      </div>
    </DisplayedSong.Provider>
  );
};

export default Container;
