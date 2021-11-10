import React, { useContext, useState } from "react";
import Dropzone from "react-dropzone";
import { DisplayedSong } from "../../pages/index";
import { TextButton } from "../../styles/clickables";
import useUpdateSong from "../../utils/useUpdateSong";

const EditChartForm = ({ setOpen }) => {
  const { displayedSong } = useContext(DisplayedSong);
  const [chart, setChart] = useState<string>();
  const updateSong = useUpdateSong();

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

  const handleConfirm = async () => {
    if (chart) {
      await updateSong({
        ...displayedSong,
        chart,
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
