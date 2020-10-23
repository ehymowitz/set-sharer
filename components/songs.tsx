import React, { useState, useEffect, useContext } from 'react'
import RemoveSongButton from './removeSongButton'
import { LoggedIn } from '../pages/_app'
import { readSongs } from '../utils/crud'

const Songs = ({changed, setChanged}) => {
  const [songList, changeSongList] = useState([])
  const { loggedIn } = useContext(LoggedIn)

  useEffect(() => { // readSongs gets called twice, not sure how to fix this but it isn't a huge delay
    readSongs(loggedIn)
    .then(changeSongList)
    .then(setChanged(false))
  }, [changed])

  return (
    <div className = "songs">
      <h1>{loggedIn}</h1>
      <ul>
        { songList.map((song, index) => {
          return (
            <li className = "song-card" key = {index}>
              <RemoveSongButton title = {song.title} setChanged = {setChanged}/>
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
}

export default Songs
