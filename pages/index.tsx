import React, { useState } from 'react'
import Songs from '../components/songs'
import CreateSongForm from '../components/createSongForm'
import Gig from '../components/gig'

export const LoggedIn = React.createContext();

const SetViewer = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <LoggedIn.Provider value = {{ loggedIn, setLoggedIn }}>
      <div className = "set-viewer">
        <div className = "song-info">
          <h1>Set Sharer</h1>
          <p>TODO: Song Details</p>
        </div>
        <div className = "setlist">
          <Gig/>
          <Songs/>
          <CreateSongForm/> // Only show if logged in
        </div>
      </div>
    </LoggedIn.Provider>

  )
}

export default SetViewer
