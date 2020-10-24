import React, { useContext, useState, useEffect } from 'react'
import { DisplayedSong } from '../pages/index'
import { callSpotify } from '../utils/apiCalls'

const SongDisplay = () => {
  const { displayedSong } = useContext(DisplayedSong)
  const [spotify, changeSpotify] = useState("")

  useEffect(() => {
    if (displayedSong) {
      callSpotify({track: displayedSong.title, artist: displayedSong.artist})
      .then(changeSpotify)
    }
  }, [displayedSong])

  if (displayedSong) {
    return (
      <div>
        <iframe
          className = "spotify embed"
          src={`https://open.spotify.com/embed/track${spotify}`}
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media">
        </iframe>
      </div>
    )
  } else {
    return null
  }
}

export default SongDisplay
