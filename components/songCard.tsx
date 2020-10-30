import React, { useState, useEffect } from 'react'
import { callSpotifyAlbumCover, callSpotifyID, callSpotifyKey } from '../utils/apiCalls'
import KeyMap from '../utils/keyMap'

const SongCard = ({songTitle, songArtist}) => {
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
    <div>
      <div className="song-img">
        <img src={songCover} alt="Album Cover"/>
      </div>
      <div className="song-text">
        <h2>{songTitle}</h2>
        <h2>{KeyMap(parseInt(key))}</h2>
        <h3>{songArtist}</h3>
      </div>
    </div>
  )

}

export default SongCard
