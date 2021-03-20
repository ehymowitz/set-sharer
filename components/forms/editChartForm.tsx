import React, {
  useState,
  useContext,
  SyntheticEvent,
  ChangeEvent,
} from "react";
import { DisplayedSong } from "../../pages/index";
import { LoggedIn } from "../../pages/_app";
import { updateSongNotes } from "../../utils/crud";

const EditChartForm = ({ setOpen }) => {
  const { displayedSong, setDisplayedSong } = useContext(DisplayedSong);
  const { loggedIn } = useContext(LoggedIn);
  const [chart, changeChart] = useState(displayedSong.notes.chart);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newNotes = displayedSong.notes;
    newNotes.chart = chart;
    updateSongNotes({
      ...displayedSong,
      set: loggedIn,
      notes: newNotes,
    });

    setOpen(false);

    setDisplayedSong({
      title: displayedSong.title,
      artist: displayedSong.artist,
      notes: newNotes,
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    changeChart(e.target.value);
  };

  return (
    <form className="chart-edit-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="inputs">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          value={chart}
          placeholder="Any PDF URL"
        />
        <input
          type="submit"
          id="modal-submit"
          className="text-button"
          value="Submit"
        />
      </div>
      <iframe src={chart} frameBorder="0" className="chart-preview" />
    </form>
  );
};

export default EditChartForm;
