import React from 'react'
import DeleteSongButton from './deleteSongButton'
import { useSongs } from './util/hooks'

const Songs = () => {
  const { songs } = useSongs()

  return songs ? (
    <div className = "songs">
      <ul>
        {songs.map((song, index) => {
          return (
            <li className = "song-card" key = {index}>
              <div className="song-img">
                <img src="https://picsum.photos/id/1082/100" alt="filler"/>
              </div>
              <div className="song-text">
                <h2>{song.title}</h2>
                <h3>{song.artist}</h3>
              </div>
              <DeleteSongButton song={song} songs={songs}/>
            </li>
          )
        })}
      </ul>
    </div>
  ) : (
    <div>
      <p>Add some songs</p>
    </div>
  )
}

export default Songs
