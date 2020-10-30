import React, { useContext } from 'react'
import RemoveSongButton from './removeSongButton'
import SongCard from './songCard'
import { LoggedIn } from '../pages/_app'
import { DisplayedSong, Song } from '../pages/index'

const Songs = () => {
  const { loggedIn } = useContext(LoggedIn)
  const { songList, setDisplayedSong } = useContext(DisplayedSong)

  const handleClick = (song: Song) => {
    setDisplayedSong(song)
  }

  return (
    <div className = "songs">
      <h1>{loggedIn}</h1>
      <ul>
        { songList.map((song: Song, index) => {
          return (
            <li
              className = "song-card"
              key = {index}
              onClick = {() => handleClick(song)}
            >
              <SongCard songTitle = {song.title} songArtist = {song.artist}/>
              <RemoveSongButton title = {song.title} artist = {song.artist}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Songs
