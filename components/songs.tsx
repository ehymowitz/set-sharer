import React from 'react'
import { useSongs } from './util/hooks'

const Songs = () => {
  const { songs } = useSongs()

  return songs ? (
    <>
      <ul>
        {songs.map((item, i) => (
          <li key={i}>
            <p>
<<<<<<< HEAD
              {item.name}
              {item.artist}
              {item.madeBy}
=======
              {item.title}
              {item.artist}
>>>>>>> fixDB
            </p>
          </li>
        ))}
      </ul>
    </>
  ) : null
}

export default Songs
