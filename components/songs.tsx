import React, { useState, useEffect, useContext } from 'react'
import { LoggedIn } from '../pages/_app'
import { readSongs } from '../utils/crud'

// Add custom interface for song

const Songs = () => {
  const [songList, changeSongList] = useState([])
  const { loggedIn } = useContext(LoggedIn)

  useEffect(() => {
    readSongs(loggedIn).then(changeSongList)
  }, [])

  return (
    <div className = "songs">
      <h1>{loggedIn}</h1>
      <ul>
        {songList.map((song, index) => {
          return (
            <li className = "song-card" key = {index}>
              <div className="song-img">
                <img src="https://picsum.photos/id/1082/100" alt="filler"/>
              </div>
                <div className="song-text">
                <h2>{song.title}</h2>
                <h3>{song.artist}</h3>
              </div>
            </li>
          )
        })}
      </ul>
      {
        // add song form here
      }
    </div>
  )
}

export default Songs
