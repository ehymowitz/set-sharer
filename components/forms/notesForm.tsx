import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { DisplayedSong } from "../../pages/index";
import { LoggedIn } from "../../pages/_app";
import { TextButton } from "../../styles/clickables";
import { updateSongNotes } from "../../utils/crud";
import RemoveNoteButton from "../buttons/removeNoteButton";

const NotesForm = () => {
  const { displayedSong } = useContext(DisplayedSong);
  const { loggedIn } = useContext(LoggedIn);
  const [note, setNote] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (note == "") return;

    displayedSong.notes.userNotes.push(note);
    updateSongNotes({
      title: displayedSong.title,
      artist: displayedSong.artist,
      notes: displayedSong.notes,
      set: loggedIn,
    });

    setNote("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNote(value);
  };

  return (
    <>
      {displayedSong.notes.userNotes.length > 0 && (
        <div className="notes-display">
          {displayedSong.notes.userNotes.map((note, index) => {
            return (
              <div className="note-box" key={index}>
                <p>{note}</p>
                <RemoveNoteButton target={index} />
              </div>
            );
          })}
        </div>
      )}
      <form className="notes-form" onSubmit={(e) => handleSubmit(e)}>
        <TextButton type="submit">Add a Note</TextButton>
        <input
          type="text"
          placeholder="Content"
          onChange={(e) => handleChange(e)}
          value={note}
          name="content"
          style={{ width: "20vw", margin: "0 5px" }}
        />
      </form>
    </>
  );
};

export default NotesForm;
