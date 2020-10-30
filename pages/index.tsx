import React, { createContext, useContext, useState, useEffect } from 'react'
import { LoggedIn } from './_app'
import { readSongs } from '../utils/crud'
import Set from '../components/set'
import SongDisplay from '../components/songDisplay'

export const DisplayedSong = createContext<Context | undefined>(undefined);

interface Context {
  songList: Song[] | undefined;
  setSongList: React.Dispatch<React.SetStateAction<Song[]>>;
  displayedSong: Song | undefined;
  setDisplayedSong: React.Dispatch<React.SetStateAction<Song>>;
}

export interface Song {
  artist: string,
  title: string,
  notes?: string
}

const SetViewer = () => {
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
      <div className = "set-viewer">
        <div className = "song-info">
          <h1>Set Sharer</h1>
          <SongDisplay />
        </div>
        <div className = "setlist">
          <Set />
        </div>
      </div>
    </DisplayedSong.Provider>
  )
}

export default SetViewer
