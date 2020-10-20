import React from 'react'
import Set from '../components/set'

const SetViewer = () => {
  return (
    <div className = "set-viewer">
      <div className = "song-info">
        <h1>Set Sharer</h1>
        <p>TODO: Song Details</p>
      </div>
      <div className = "setlist">
        <Set />
      </div>
    </div>
  )
}

export default SetViewer
