import React, { useContext } from 'react'
import SongInfo from './songInfo'
import { DisplayedSong, Song } from '../pages/index'

const Songs = () => {
  const { songList, setDisplayedSong } = useContext(DisplayedSong)

  const handleClick = (song: Song) => {
    setDisplayedSong(song)
  }

  return (
    <div className = "songs">
      <ul>
        { songList.map((song: Song, index) => {
          return (
            <li
              className = "song-card"
              key = {index}
              onClick = {() => handleClick(song)}
            >
              <SongInfo songTitle = {song.title} songArtist = {song.artist}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Songs
