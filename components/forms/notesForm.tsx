import React, { useState, useContext, ChangeEvent, SyntheticEvent } from 'react'
import { DisplayedSong } from '../../pages/index'
import { LoggedIn } from '../../pages/_app'
import { updateSongNotes } from '../../utils/crud'
import RemoveNoteButton from '../buttons/removeNoteButton'

const NotesForm = () => {
  const { displayedSong } = useContext(DisplayedSong)
  const { loggedIn } = useContext(LoggedIn)
  const [formInput, setFormInput] = useState({
    title: "",
    content: ""
  })

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (formInput.title == "" || formInput.content == "") return
    const newNote = displayedSong.notes
    newNote.userNotes[formInput.title] = formInput.content
    updateSongNotes({
      title: displayedSong.title,
      artist: displayedSong.artist,
      notes: newNote,
      set: loggedIn
    })

    setFormInput({
      title: "",
      content: ""
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormInput({
      ...formInput,
      [e.target.name]: value
    })
  }

  return (
    <>
      {Object.keys(displayedSong.notes.userNotes) &&
        <div className="notes-display">
          {
            Object.keys(displayedSong.notes.userNotes).map((key, index) => {
              return (
                <div className="note-box" key={index}>
                  <p>
                    <strong>{`${key}: `}</strong>
                    {`${displayedSong.notes.userNotes[key]}`}
                  </p>
                  <RemoveNoteButton target = {key} />
                </div>
              )
            })
          }
        </div>
      }
      <form className="notes-form" onClick = {(e)=> handleSubmit(e)}>
        <input
          className="text-button"
          type="submit"
          value="Add a Note"
          style = {{marginRight: '15px'}}
        />
        <input
          type="text"
          placeholder="Title"
          onChange = {(e) => handleChange(e)}
          value = {formInput.title}
          name = "title"
        />
        <input
          type="text"
          placeholder="Content"
          onChange = {(e) => handleChange(e)}
          value = {formInput.content}
          name = "content"
          style = {{ width: '20vw', margin: '0 5px'}}
        />
      </form>
    </>
  )
}

export default NotesForm
