import React, { createContext, useContext, useState, useEffect } from 'react'
import { LoggedIn } from './_app'
import { readSongs } from '../utils/crud'
import SidePanel from '../components/sidePanel'
import SongDisplay from '../components/songDisplay'

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
  customKey: string;
  lyrics: string;
  youtubeID: string;
  userNotes?: any;
}

const Container = () => {
  const [displayedSong, setDisplayedSong] = useState(undefined)
  const [songList, setSongList] = useState([])
  const { loggedIn } = useContext(LoggedIn)

  useEffect(() => {
    if (loggedIn) {
      readSongs(loggedIn)
      .then(setSongList)
    }
  }, [loggedIn])

  return (
    <DisplayedSong.Provider value = {{ displayedSong, setDisplayedSong, songList, setSongList }} >
      <div className = "container">
        <div className = "song-info">
          <h1>Set Sharer</h1>
          <SongDisplay />
        </div>
        <div className = "setlist">
          <SidePanel />
        </div>
      </div>
    </DisplayedSong.Provider>
  )
}

export default Container
