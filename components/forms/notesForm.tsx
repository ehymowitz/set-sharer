import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { DisplayedSong } from "../../pages/index";
import { TextButton } from "../../styles/clickables";
import { TextInput } from "../../styles/text";
import useUpdateSong from "../../utils/useUpdateSong";
import RemoveNoteButton from "../buttons/removeNoteButton";

const NotesForm = () => {
  const { displayedSong } = useContext(DisplayedSong);
  const [note, setNote] = useState("");
  const updateSong = useUpdateSong();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (note == "") return;

    const newNotes = displayedSong.userNotes || [];
    newNotes.push(note);
    await updateSong({ ...displayedSong, userNotes: newNotes });

    setNote("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNote(value);
  };

  return (
    <>
      {displayedSong.userNotes?.length > 0 && (
        <div className="notes-display">
          {displayedSong.userNotes.map((note, index) => {
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
        <TextInput
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
