import React, { useContext } from "react";
import { DisplayedSong } from "../../pages/index";
import useUpdateSong from "../../utils/useUpdateSong";

const RemoveNoteButton = ({ target }) => {
  const { displayedSong } = useContext(DisplayedSong);
  const updateSong = useUpdateSong();

  const handleClick = async () => {
    displayedSong.userNotes.splice(target, 1);

    await updateSong({ ...displayedSong, userNotes: displayedSong.userNotes });
  };

  return (
    <button className="remove-note-button" onClick={() => handleClick()} />
  );
};

export default RemoveNoteButton;
