import React from 'react'
import DeleteSongButton from './deleteSongButton'
import { useSongs } from './util/hooks'

const Songs = () => {
  const { songs } = useSongs()

  return songs ? (
    <div>
      <ul>
        {songs.map((song, index) => {
          return (
            <li key = {index}>
              <p>{song.title}</p>
              <DeleteSongButton song={song} songs={songs}/>
            </li>
          )
        })}
      </ul>
    </div>
  ) : (
    <div>
      <p>test</p>
    </div>
  )
}

export default Songs
