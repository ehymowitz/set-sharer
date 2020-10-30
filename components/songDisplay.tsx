import React, { useContext, useState, useEffect } from 'react'
import { DisplayedSong } from '../pages/index'
import { callSpotifyID, callSpotifyKey, callLyrics } from '../utils/apiCalls'
import KeyMap from '../utils/keyMap'

const SongDisplay = () => {
  const { displayedSong } = useContext(DisplayedSong)
  const [spotifyID, changeSpotifyID] = useState("")
  const [spotifyKey, changeSpotifyKey] = useState("")
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
      callSpotifyKey(spotifyID)
      .then(changeSpotifyKey)
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
    {spotifyKey &&
      <p>{KeyMap(parseInt(spotifyKey))}</p>
    }
    </div>
  )
}

export default SongDisplay
