import React from 'react'
import Gig from '../components/gig'
import Songs from '../components/songs'
import CreateSongForm from '../components/createSongForm'

const SetViewer = () => {
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
