import React, { useContext, useState } from "react";
import Dropzone from "react-dropzone";
import { DisplayedSong } from "../../pages/index";
import { LoggedIn } from "../../pages/_app";
import { TextButton } from "../../styles/clickables";
import { updateSongNotes } from "../../utils/crud";

const EditChartForm = ({ setOpen }) => {
  const { displayedSong, setDisplayedSong } = useContext(DisplayedSong);
  const { loggedIn } = useContext(LoggedIn);
  const [chart, setChart] = useState<string>();

  const fileReader = new FileReader();

  const handleDrop = (file: File) => {
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", (event) => {
      const url = event.target.result;
      if (typeof url === "string") {
        setChart(url);
      }
    });
  };

  const handleConfirm = () => {
    if (chart) {
      updateSongNotes({
        ...displayedSong,
        set: loggedIn,
        notes: { ...displayedSong.notes, chart: chart },
      });
      setDisplayedSong({
        title: displayedSong.title,
        artist: displayedSong.artist,
        notes: { ...displayedSong.notes, chart: chart },
      });
    }

    setOpen(false);
  };

  return (
    <div className="dropzone-container">
      <Dropzone
        onDrop={(acceptedFiles) => handleDrop(acceptedFiles[0])}
        maxFiles={1}
        maxSize={10000000}
        multiple={false}
        accept="application/pdf"
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag some files in or click here to select files!</p>
            </div>
          </section>
        )}
      </Dropzone>
      {chart && (
        <iframe src={chart} frameBorder="0" className="chart-preview"></iframe>
      )}
      <TextButton onClick={handleConfirm}>Confirm</TextButton>
    </div>
  );
};

export default EditChartForm;
