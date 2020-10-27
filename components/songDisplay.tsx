import React, { useContext, useState, useEffect } from 'react'
import { DisplayedSong } from '../pages/index'
import { callSpotify, callLyrics } from '../utils/apiCalls'

// PUT API TOKENS INTO ENV

const SongDisplay = () => {
  const { displayedSong } = useContext(DisplayedSong)
  const [spotify, changeSpotify] = useState("")
  const [lyrics, changeLyrics] = useState("")

  useEffect(() => {
    if (displayedSong) {
      callSpotify({track: displayedSong.title, artist: displayedSong.artist})
      .then(changeSpotify)

      callLyrics({track: displayedSong.title, artist: displayedSong.artist})
      .then(changeLyrics)
    }
  }, [displayedSong])


  return (
    <div>
    {spotify &&
      <iframe
      className = "spotify embed"
      src={`https://open.spotify.com/embed/track${spotify}`}
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
