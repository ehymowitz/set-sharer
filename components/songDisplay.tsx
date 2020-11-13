import React, { useContext } from 'react'
import { DisplayedSong } from '../pages/index'
import { LoggedIn } from '../pages/_app'
import ChangeKeyForm from './forms/changeKeyForm'
import NotesForm from './forms/notesForm'

const SongDisplay = () => {
  const { displayedSong } = useContext(DisplayedSong)
  const { loggedIn } = useContext(LoggedIn)

  return (
    <div className="song-display">
      {(displayedSong && loggedIn) &&
        <div className="song-display-heading">
          <h1>{displayedSong.artist} - {displayedSong.title}</h1>
          <h3>
            <p>{displayedSong.notes.customKey ? displayedSong.notes.customKey: displayedSong.notes.spotifyKey}</p>
          </h3>
          <ChangeKeyForm song = {displayedSong}/>
        </div>
      }
      {(displayedSong && loggedIn) &&
        <div className="notes">
          <NotesForm />
        </div>
      }
      <div className="lyrics-and-video">
        {(displayedSong && loggedIn) &&
          <p className="lyrics">{displayedSong.notes.lyrics}</p>
        }
        <div>
          {(displayedSong && loggedIn) &&
            <iframe
            className = "youtube-video"
            width="100%"
            height="250"
            src={`https://www.youtube.com/embed/${displayedSong.notes.youtubeID}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          }
          {(displayedSong && loggedIn) &&
            <iframe
            className = "spotify-embed"
            src={`https://open.spotify.com/embed/track${displayedSong.notes.spotifyID}`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            />
          }
        </div>
      </div>
    </div>
  )
}

export default SongDisplay
