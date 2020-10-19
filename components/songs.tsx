import React from 'react'

const Songs = () => {

  const songs = [
    {title: "title1", artist: "artist1"}
  ]

  return (
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
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Songs
