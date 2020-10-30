import React, { useContext, useState, useEffect } from 'react'
import { DisplayedSong } from '../pages/index'
import { callSpotifyID, callSpotifyKey, callLyrics, callYoutubeSearch } from '../utils/apiCalls'
import KeyMap from '../utils/keyMap'

const SongDisplay = () => {
  const { displayedSong } = useContext(DisplayedSong)
  const [spotifyID, changeSpotifyID] = useState("")
  const [spotifyKey, changeSpotifyKey] = useState("")
  const [lyrics, changeLyrics] = useState("")
  const [videoId, changeVideoId] = useState("")

  useEffect(() => {
    if (displayedSong) {
      callSpotifyID({track: displayedSong.title, artist: displayedSong.artist})
      .then(changeSpotifyID)

      callLyrics({track: displayedSong.title, artist: displayedSong.artist})
      .then(changeLyrics)

      callYoutubeSearch(`${displayedSong.title} by ${displayedSong.artist}`)
      .then(changeVideoId)
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
    {videoId &&
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >
      </iframe>}
    </div>
  )
}

export default SongDisplay
