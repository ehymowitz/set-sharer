import React, { useContext, ChangeEvent } from "react";
import { LoggedIn } from "../../pages/_app";
import { DisplayedSong } from "../../pages/index";
import { updateSongNotes } from "../../utils/crud";
import { StyledSelect } from "../../styles/clickables";

const ChangeKeyForm = ({ song }) => {
  const { loggedIn } = useContext(LoggedIn);
  const { displayedSong, setDisplayedSong } = useContext(DisplayedSong);

  const keys = [
    "C",
    "C#",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const songInfo = {
      ...displayedSong,
      customKey: e.target.value,
    };
    updateSongNotes(Object.assign(songInfo, { set: loggedIn })); // API Call
    setDisplayedSong(songInfo);
    e.target.value = "";
  };

  return (
    <StyledSelect
      name="keys"
      onChange={(e) => handleChange(e)}
      defaultValue={""}
    >
      <option value="" disabled hidden>
        Change Key
      </option>
      {keys.map((key, i) => {
        return (
          <option value={key} key={i}>
            {key === song.spotifyKey ? `${key} (Default)` : key}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default ChangeKeyForm;
