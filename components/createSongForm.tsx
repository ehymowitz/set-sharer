import React from 'react'

const CreateSongForm = () => {

  return (
    <div className="song-form">
      <form>
        <input placeholder = "Song Name"/>
        <input placeholder = "Song Artist"/>
        <input type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default CreateSongForm
