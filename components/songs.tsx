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
              {item.title}
              {item.artist}
            </p>
          </li>
        ))}
      </ul>
    </>
  ) : null
}

export default Songs
