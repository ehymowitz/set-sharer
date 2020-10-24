import React, { createContext, useState } from 'react'
import Set from '../components/set'
import SongDisplay from '../components/songDisplay'

export const DisplayedSong = createContext<Context | undefined>(undefined);

interface Context {
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

  return (
    <DisplayedSong.Provider value = {{ displayedSong, setDisplayedSong }} >
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
