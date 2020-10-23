import React, { createContext, useState } from 'react'
import Set from '../components/set'
import SongDisplay from '../components/songDisplay'

export const DisplayedSong = createContext<string | undefined>(undefined);

interface Context {
  song: string;
  setLoggedIn: React.Dispatch<React.SetStateAction<string>>;
}

const SetViewer = () => {
  const [displayedSong, setDisplayedSong] = useState("")

  return (
    <DisplayedSong.Provider value = "test" >
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
