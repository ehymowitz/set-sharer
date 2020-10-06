import React from 'react'
import DeleteSongButton from './deleteSongButton'
import { useSongs } from './util/hooks'

const Songs = () => {
  const { songs } = useSongs()

  return songs ? (
    <>
      <ul>
        {songs.map((item, i) => (
          <li key={i}>
            <p>
              {item.title}
              {item.artist}
            </p>
            <DeleteSongButton song = {item} songs = {songs}/>
          </li>
        ))}
      </ul>
    </>
  ) : null
}

export default Songs
