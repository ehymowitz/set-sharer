import React, { useState, useContext, SyntheticEvent, ChangeEvent } from 'react'
import { DisplayedSong } from '../../pages/index'
import { LoggedIn } from '../../pages/_app'
import { updateSongNotes } from '../../utils/crud'

const EditSongForm = ({setOpen}) => {
  const { displayedSong, setDisplayedSong } = useContext(DisplayedSong)
  const { loggedIn } = useContext(LoggedIn)
  const [form, changeForm] = useState({
    lyrics: displayedSong.notes.lyrics,
    youtube: `https://www.youtube.com/watch?v=${displayedSong.notes.youtubeID}`,
    spotify: `https://open.spotify.com/track${displayedSong.notes.spotifyID}`,
    artwork: displayedSong.notes.spotifyAlbumCover
  })

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const newNotes = displayedSong.notes
    newNotes.lyrics = form.lyrics
    newNotes.spotifyAlbumCover = form.artwork
    newNotes.spotifyID = form.spotify.split('/track')[1]
    newNotes.youtubeID = form.youtube.split('/watch?v=')[1]
    updateSongNotes({
      title: displayedSong.title,
      artist: displayedSong.artist,
      notes: newNotes,
      set: loggedIn
    })

    setOpen(false)

    setDisplayedSong({
      title: displayedSong.title,
      artist: displayedSong.artist,
      notes: newNotes
    })

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    changeForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="song-edit-form" onSubmit={(e)=> handleSubmit(e)}>
      <div className="left">
        <input type="submit" id="modal-submit" className="text-button" value="Submit"/>
        <h2>lyrics</h2>
        <textarea
          onChange={(e)=> handleChange(e)}
          id="lyrics"
          value={form.lyrics}
          name="lyrics"
        />
      </div>
      <div className="right">
        <div className="row">
          <div style={{width: '70%'}}>
            <h2>Youtube</h2>
            <input
              onChange={(e)=> handleChange(e)}
              type="text"
              value={form.youtube}
              name="youtube"
            />
          </div>
          <iframe
            className = "youtube-video"
            width="150"
            height="100"
            src={`https://www.youtube.com/embed/${form.youtube.split('watch?v=')[1]}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className="row">
          <div style={{width: '70%'}}>
            <h2>Spotify</h2>
            <input
              onChange={(e)=> handleChange(e)}
              type="text"
              value={form.spotify}
              name="spotify"
            />
          </div>
          <iframe
            className = "spotify-embed"
            src={`https://open.spotify.com/embed/track${form.spotify.split('/track')[1]}`}
            width="150"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
          />
        </div>
        <div className="row">
          <div style={{width: '70%'}}>
            <h2>Album Cover</h2>
            <input
              onChange={(e)=> handleChange(e)}
              type="text"
              value={form.artwork}
              name="artwork"
            />
          </div>
          <img src={form.artwork} alt="artwork"/>
        </div>
      </div>
    </form>
  )
}

export default EditSongForm
