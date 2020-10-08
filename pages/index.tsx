import React, { useContext } from 'react'
import Songs from '../components/songs'
import CreateSongForm from '../components/createSongForm'
import Gig from '../components/gig'
import { Context, LoggedIn } from '../pages/_app'

const SetViewer = () => {
  const { loggedIn } = useContext<Context>(LoggedIn)

  return (
    <div className = "set-viewer">
      <div className = "song-info">
        <h1>Set Sharer</h1>
        <p>TODO: Song Details</p>
      </div>
      <div className = "setlist">
        <Gig />
        <Songs />
        <CreateSongForm/>
      </div>
    </div>
  )
}

export default SetViewer
