import React, { useContext, useState, useEffect } from 'react'
import { DisplayedSong } from '../pages/index'
import { callSpotifyID, callSpotifyFeatures, callSpotifyAlbumCover, callLyrics } from '../utils/apiCalls'

const SongDisplay = () => {
  const { displayedSong } = useContext(DisplayedSong)
  const [spotifyID, changeSpotifyID] = useState("")
  const [spotifyFeatures, changeSpotifyFeatures] = useState("")
  const [spotifyAlbum, changeSpotifyAlbum] = useState("")
  const [lyrics, changeLyrics] = useState("")

  useEffect(() => {
    if (displayedSong) {
      callSpotifyID({track: displayedSong.title, artist: displayedSong.artist})
      .then(changeSpotifyID)

      callLyrics({track: displayedSong.title, artist: displayedSong.artist})
      .then(changeLyrics)
    }
  }, [displayedSong])

  useEffect(() => {
    if (spotifyID) {
      callSpotifyFeatures(spotifyID)
      .then(changeSpotifyFeatures)

      callSpotifyAlbumCover(spotifyID)
      .then(changeSpotifyAlbum)
    }
  }, [spotifyID])


  return (
    <div>
    {spotifyID &&
      <iframe
      className = "spotify embed"
      src={`https://open.spotify.com/embed/track${spotifyID}`}
      width="300"
      height="380"
      frameBorder="0"
      allow="encrypted-media">
      </iframe>
    }
    {lyrics &&
      <p>{lyrics}</p>
    }
    </div>
  )
}

export default SongDisplay
