import React, { useState, useEffect } from 'react'
import { callSpotifyAlbumCover, callSpotifyID, callSpotifyKey } from '../utils/apiCalls'
import KeyMap from '../utils/keyMap'
import RemoveSongButton from './removeSongButton'

const SongCardContainer = ({songTitle, songArtist}) => {
  const [songID, changeSongID] = useState('')
  const [key, changeKey] = useState('')
  const [songCover, changeSongCover] = useState('')

  useEffect(() => {
    callSpotifyID({track: songTitle, artist: songArtist})
    .then(changeSongID)
  }, [songTitle])

  useEffect(() => {
    if (songID) {
      callSpotifyAlbumCover(songID)
      .then(changeSongCover)

      callSpotifyKey(songID)
      .then(changeKey)
    }
  }, [songID])

  return (
    <div className="song-card-container">
      <div className="song-img">
        <img src={songCover} alt="Album Cover"/>
      </div>
      <div className="song-text">
        <h2>{songTitle}</h2>
        <h3>{songArtist}</h3>
        <h4>{KeyMap(parseInt(key))}</h4>
      </div>
      <RemoveSongButton title = {songTitle} artist = {songArtist}/>
    </div>
  )

}

export default SongCardContainer
