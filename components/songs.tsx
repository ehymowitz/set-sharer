import React, { useState, useEffect, useContext } from 'react'
import { LoggedIn } from '../pages/_app'
import { readSongs } from '../utils/crud'

const Songs = () => {
  const [songList, changeSongList] = useState([])
  const { loggedIn } = useContext(LoggedIn)

  useEffect(() => {
    const list = async () => {
      const result = readSongs(loggedIn).then(changeSongList)
    }
    list()
  }, [])

  if (songList.length > 1 ) {
    return (
      <div className = "songs">
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
      </div>
    )
  } else {
    return (
      <div className="no-songs">
        <h1>Add Songs!</h1>
      </div>
    )
  }
}

export default Songs
