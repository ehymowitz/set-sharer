import React, { ChangeEvent, useContext } from "react";
import { DisplayedSong } from "../../pages/index";
import { StyledSelect } from "../../styles/clickables";
import useUpdateSong from "../../utils/useUpdateSong";

const ChangeKeyForm = ({ song }) => {
  const { displayedSong } = useContext(DisplayedSong);
  const updateSong = useUpdateSong();

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

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    let val = e.target.value;
    const songInfo = {
      ...displayedSong,
      customKey: val,
    };
    await updateSong(songInfo);
    val = "";
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
