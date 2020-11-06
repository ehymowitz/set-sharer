import React, { useContext } from 'react'
import SongListCard from './songListCard'
import { DisplayedSong, Song } from '../pages/index'

const SongList = () => {
  const { songList, setDisplayedSong } = useContext(DisplayedSong)

  const handleClick = (song: Song) => {
    setDisplayedSong(song)
  }

  return (
    <div className = "song-list">
      <ul>
        { songList.map((song: Song, index) => {
          return (
            <li
              className = "song-card"
              key = {index}
              onClick = {() => handleClick(song)}
            >
              <SongListCard song={song}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SongList
