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
    <div className="song-display">
      {displayedSong &&
        <div className="song-display-heading">
          <h1>{displayedSong.artist} - {displayedSong.title}</h1>
          <h3>
            {spotifyKey &&
              <p>{KeyMap(parseInt(spotifyKey))}</p>
            }
          </h3>
        </div>
      }
      {spotifyID &&
        <iframe
          className = "spotify-embed"
          src={`https://open.spotify.com/embed/track${spotifyID}`}
          width="100%"
          height="80"
          frameBorder="0"
          allow="encrypted-media"
        />
      }
      <div className="lyrics-and-video">
        {lyrics &&
          <p className="lyrics">{lyrics}</p>
        }
        {videoId &&
          <iframe
          className = "youtube-video"
          width="100%"
          height="250"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        }
      </div>
    </div>
  )
}

export default SongDisplay
