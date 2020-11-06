import React from 'react'
import RemoveSongButton from './buttons/removeSongButton'

const SongListCard = ({song}) => {

  return (
    <div className="song-card-container">
      <div className="song-img">
        <img src={song.notes.spotifyAlbumCover} alt="Album Cover"/>
      </div>
      <div className="song-text">
        <h2>{song.title}</h2>
        <h3>{song.artist}</h3>
        <h4>{song.notes.spotifyKey}</h4>
      </div>
      <RemoveSongButton title = {song.title} artist = {song.artist}/>
    </div>
  )

}

export default SongListCard
